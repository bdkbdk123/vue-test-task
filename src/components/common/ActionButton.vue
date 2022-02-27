<template>
  <button class="action-button">{{ props.label }}</button>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>

<style scoped>
.action-button {
  background-color: black;
  border: none;
  border-radius: 8px;
  color: yellow;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 8px 12px;
  text-align: center;
}
</style>
