<template>
  <tr class="person-row">
    <td>
      {{ props.index + 1 }}
    </td>
    <td :style="`color: ${getColor(person.eye_color)}`">
      {{ props.person.name }}
    </td>
    <td>
      <ActionButton label="Edit" @click="handleEdit" />
    </td>
  </tr>
</template>

<script setup>
import { isColor } from "@/util/color-util";
import ActionButton from "@/components/common/ActionButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({ person: Object, index: Number });

const getColor = (color) => {
  if (isColor(color)) return color;
  return "black";
};

const handleEdit = () => {
  router.push({
    name: "edit",
    params: props.person,
  });
};
</script>

<style scoped>
.person-row td {
  padding: 12px 15px;
}
</style>
