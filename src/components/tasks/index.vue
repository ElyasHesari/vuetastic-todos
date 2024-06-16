<template>
  <div class="container">
    <CreateTask />
    <hr />
    <FilterTask />

    <div class="row g-3">
      <div v-for="(task, index) in tasks" :key="index" class="col-md-4">
        <div
          class="card"
          :class="{
            'bg-success bg-gradient bg-opacity-50': task.completed == 'done',
            'bg-success bg-gradient bg-opacity-25':
              task.completed == 'in_progress',
          }"
        >
          <div
            class="card-body d-flex justify-content-between align-items-center"
          >
            <del
              class="text-start"
              style="width: 190px"
              v-if="task.completed == 'done'"
              >{{ task.title }}</del
            >
            <div
              class="text-start"
              style="width: 190px"
              v-else-if="task.completed == 'in_progress'"
            >
              {{ task.title }}
            </div>
            <div class="text-start" style="width: 190px" v-else>
              {{ task.title }}
            </div>

              <UpdateTask :task="task" />
              <EditTask :task="task" />
              <DeleteTask :id="task.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FilterTask from "./Filter.vue";
import CreateTask from "./Create.vue";
import UpdateTask from "./Update.vue";
import DeleteTask from "./Delete.vue";
import EditTask from "./Edit.vue";
import { computed, ref } from "vue";
import { useTaskStore } from "../../store/task";

const store = useTaskStore();
const tasks = computed(() => store.GetTasks);
</script>