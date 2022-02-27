<template>
  <table class="people-table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <PersonRow
        v-for="(person, idx) in props.people"
        :key="idx"
        :person="person"
        :index="idx"
      />
    </tbody>
  </table>
</template>

<script setup>
import PersonRow from "./PersonRow.vue";

const props = defineProps({
  people: Array,
});
</script>

<style scoped>
.people-table {
  width: 50%;
  border-collapse: collapse;
  font-size: 16px;
  min-width: 600px;
}

.people-table thead tr {
  background-color: black;
  color: yellow;
  text-align: left;
}

.people-table thead th {
  padding: 12px 15px;
}

.people-table tbody tr {
  border-bottom: 1px solid white;
}

.people-table tbody tr:nth-of-type(even) {
  background-color: whitesmoke;
}

.people-table tbody tr:last-of-type {
  border-bottom: 2px solid black;
}
</style>
