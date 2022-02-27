<template>
  <div class="gender-stats">
    Men: {{ props.males }} | Women: {{ props.females }}
  </div>
</template>

<script setup>
const props = defineProps({ males: Number, females: Number });
</script>

<style scoped>
.gender-stats {
  padding: 10px;
  background-color: black;
  color: yellow;
}
</style>
