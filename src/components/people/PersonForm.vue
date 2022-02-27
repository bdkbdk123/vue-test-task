<template>
  <form id="person-form">
    <table class="form-table">
      <tbody>
        <tr v-for="key in formKeys" :key="key">
          <td>{{ formatName(key) }}</td>
          <td>
            <textarea v-if="Array.isArray(form[key])" v-model="form[key]" />
            <input v-else v-model="form[key]" />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { capitalizeFirstLetter } from "@/util/string-util";
import config from "@/config";

const props = defineProps({ person: Object });

const formKeys = computed(() => Object.keys(props.person));

const shouldFillForm = (person) =>
  person.gender === config.fillFormArgs.gender &&
  person.birth_year === config.fillFormArgs.birthYear;

const formatName = (name) => capitalizeFirstLetter(name.replace("_", " "));

const form = ref({
  ...(shouldFillForm(props.person)
    ? props.person
    : Object.entries(props.person).map(() => "")),
});
</script>

<style scoped>
.form-table {
  width: 50%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 300px;
}
</style>
