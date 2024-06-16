<template>
  <span
    @click="deleteTask(id)"
    class="bi bi-trash-fill pointer"
    data-toggle="tooltip"
    data-placement="top"
    title="Delete"
  ></span>


</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const props = defineProps(["id"]);
const store = useTaskStore();

function deleteTask(id) {
  store.deleteTasks(id);
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>