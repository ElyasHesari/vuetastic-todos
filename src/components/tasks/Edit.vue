<template>
  <span @click="openModal" class="bi bi-pen-fill pointer mx-3" data-toggle="tooltip" data-placement="top"
    title="Edit"></span>
  <div class="modal" :class="{ 'd-block': showModal }">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-body">
          <input type="text" class="form-control" v-model="title.title">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="editTask(task)">Save</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-backdrop fade show" v-if="showModal"></div>

</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const props = defineProps(["task"]);
const store = useTaskStore();
const showModal = ref(false)
const title = ref(props.task)


function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function editTask(title) {
  console.log('title', title)
  store.editTasks(title);
  closeModal()
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>