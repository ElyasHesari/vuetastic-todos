import { useTaskStore } from "../store/task";

const channel = new BroadcastChannel("todoChannel");

export default {
  setup() {
    const store = useTaskStore();

    channel.onmessage = (event) => {
        store.tasks = JSON.parse(event.data);
    };
  },
  postTodos(tasks) {
    channel.postMessage(JSON.stringify(tasks));
  },
};
