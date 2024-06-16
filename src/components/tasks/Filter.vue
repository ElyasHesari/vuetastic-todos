<template>
  <div class="row">
    <div class="col-md-6 mb-4">
      <h6 class="text-start">Filter Tasks:</h6>
      <select v-model="number" @change="filterTasks" class="form-select form-select-sm">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const store = useTaskStore();
const number = ref(0);

function filterTasks() {
  store.filterTasks(number.value)
}
</script>

<style scoped>
</style>