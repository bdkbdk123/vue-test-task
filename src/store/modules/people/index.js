import { startsWithUnwantedChar, getGenderAmount, scrapIds } from "./helpers";
import {
  ADD_PEOPLE,
  SET_FEMALES_COUNT,
  SET_MALES_COUNT,
  SET_LOADING,
} from "./mutation-types";

export default {
  namespaced: true,
  state: {
    people: [],
    malesCount: 0,
    femalesCount: 0,
    loading: true,
  },
  mutations: {
    [ADD_PEOPLE](state, value) {
      state.people = [...state.people, ...value];
    },
    [SET_FEMALES_COUNT](state, value) {
      state.femalesCount = value;
    },
    [SET_MALES_COUNT](state, value) {
      state.malesCount = value;
    },
    [SET_LOADING](state, value) {
      state.loading = value;
    },
  },
  actions: {
    async fetch({ commit, state }, config) {
      if (state.people.length) return;

      commit(SET_LOADING, true);
      const { minAmount, unwantedChars, allowDuplicates } = config;
      let page = 1;
      let response;

      do {
        response = await this.$api.people.fetchPage(page);
        const filteredPeople = response?.results?.filter(
          (person) => !startsWithUnwantedChar(person.name, unwantedChars)
        );
        commit(ADD_PEOPLE, scrapIds(filteredPeople));
        page++;
      } while (response?.next && state.people.length < minAmount);

      const amount = state.people.length;

      // Note: Task requirement is to display 80 or more people whose name doesn't start with L, N or C.
      // Since Swapi doesn't provide enough people that meet this requirement,
      // with allowDuplicates param we can decide if we want to have duplicates and meet '80 or more' requirement
      // or have less than 80 without duplicates.
      if (allowDuplicates && amount < minAmount) {
        const missingAmount = minAmount - amount;
        commit(ADD_PEOPLE, state.people.slice(0, missingAmount));
      }

      commit(SET_FEMALES_COUNT, getGenderAmount("female", state.people));
      commit(SET_MALES_COUNT, getGenderAmount("male", state.people));
      commit(SET_LOADING, false);
    },
    async fetchById(context, id) {
      const person = await this.$api.people.fetchById(id);
      return person;
    },
  },
  getters: {
    getPeople: (state) => state.people,
    getMalesCount: (state) => state.malesCount,
    getFemalesCount: (state) => state.femalesCount,
    isLoading: (state) => state.loading,
  },
};
