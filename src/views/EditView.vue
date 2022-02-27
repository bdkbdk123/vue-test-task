<template>
  <div class="edit">
    <div v-if="loading">Loading</div>
    <PersonForm v-else :person="editedPerson" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import PersonForm from "@/components/people/PersonForm.vue";

const store = useStore();

const props = defineProps({ person: Object });

const editedPerson = ref({});
const loading = ref(true);

onMounted(async () => {
  editedPerson.value = props.person;
  // Note: To avoid unnecessary calls I first check if data was passed in props (in case of user using edit button)
  // and only if it wasn't (direct url to certain person) person data is downloaded
  if (Object.keys(props.person)?.length <= 1) {
    editedPerson.value = await store.dispatch(
      "people/fetchById",
      props.person.id
    );
  }
  loading.value = false;
});
</script>

<style scoped>
.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
