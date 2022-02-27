<template>
  <div class="home">
    <div v-if="loading">Loading (~{{ loadingPercentage }}%)</div>
    <div v-else>
      <GenderStats :males="males" :females="females" />
      <PeopleList :people="people" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PeopleList from "@/components/people/people-list/PeopleList.vue";
import config from "@/config";
import GenderStats from "../components/people/GenderStats.vue";

const store = useStore();

const people = computed(() => store.getters["people/getPeople"]);
const males = computed(() => store.getters["people/getMalesCount"]);
const females = computed(() => store.getters["people/getFemalesCount"]);
const loading = computed(() => store.getters["people/isLoading"]);
const loadingPercentage = computed(
  () => (people.value.length * 100) / config.minAmount
);

store.dispatch("people/fetch", {
  minAmount: config.minAmount,
  unwantedChars: config.unwantedChars,
  allowDuplicates: config.allowDuplicates,
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
