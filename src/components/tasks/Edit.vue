<template>
  <span
    @click="editTask(task)"
    class="bi bi-pen-fill pointer mx-3"
    data-toggle="tooltip"
    data-placement="top"
    title="Edit"
  ></span>
  
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const props = defineProps(["task"]);
const store = useTaskStore();

function editTask(task) {
  store.editTasks(task);
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>