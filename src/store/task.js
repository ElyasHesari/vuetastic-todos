import { defineStore } from "pinia";
import Swal from "sweetalert2";
import broadcastChannelService from "../services/broadcastChannelService";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [
        {
          id: 1,
          title: "delectus aut autem",
          completed: "not_done",
        },
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: "not_done",
        },
        {
          id: 3,
          title: "fugiat veniam minus",
          completed: "in_progress",
        },
        {
          id: 4,
          title: "et porro tempora",
          completed: "done",
        },
        {
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: "not_done",
        },
        {
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: "in_progress",
        },
        {
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: "not_done",
        },
        {
          id: 8,
          title: "quo adipisci enim quam ut ab",
          completed: "done",
        },
        {
          id: 9,
          title: "molestiae perspiciatis ipsa",
          completed: "in_progress",
        },
        {
          id: 10,
          title: "illo est ratione doloremque quia maiores aut",
          completed: "done",
        },
      ],
      selectedNumber: 50,
    };
  },
  getters: {
    getTasks(state) {
      return state.tasks.slice(0, this.selectedNumber);
    },
  },
  actions: {
    filterTasks(selectedNumber) {
      this.selectedNumber = selectedNumber;
      broadcastChannelService.postTodos(this.tasks)
    },
    storeTasks(title) {
      let numberTask = this.tasks.length + 1;
      this.tasks.unshift({
        id: numberTask++,
        title: title,
        completed: "not_done",
      });
      broadcastChannelService.postTodos(this.tasks)

      Swal.fire({
        title: "Task added",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    updateTasks(task) {
      const taskIndex = this.tasks.findIndex((item) => item.id === task.id);
      if (taskIndex !== -1) {
        const targetTask = this.tasks[taskIndex];
        switch (targetTask.completed) {
          case "not_done":
            targetTask.completed = "in_progress";
            break;
          case "in_progress":
            targetTask.completed = "done";
            break;
          case "done":
            targetTask.completed = "not_done";
            break;
        }
      }
      broadcastChannelService.postTodos(this.tasks)

      Swal.fire({
        title: "Task updated",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    editTasks(task) {
      const taskIndex = this.tasks.findIndex((item) => item.id === task.id);
      if (taskIndex !== -1) {
        const targetTask = this.tasks[taskIndex];
      }
      broadcastChannelService.postTodos(this.tasks)

      Swal.fire({
        title: "Task edited",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    deleteTasks(id) {
      const newTasks = this.tasks.filter((item) => item.id !== id);
      this.tasks = newTasks;
      broadcastChannelService.postTodos(this.tasks)

      Swal.fire({
        title: "Task deleted",
        icon: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    
  },
});
