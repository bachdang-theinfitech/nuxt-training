<template>
  <div>
    <input v-model="editing" />
    <button @click="onAddTodoClicked">Add todo</button>
    <ul>
      <li v-for="(x, i) in todo" :key="i" :class="x.done ? 'done' : ''">
        {{ x.text }}
        <input type="checkbox" v-model="x.done" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: "",
      todo: [],
    };
  },
  methods: {
    onAddTodoClicked() {
      this.todo.push({
        text: this.editing,
        done: false,
      });
      this.editing = "";
    },
  },
};
</script>

<style scoped>
.done {
  color: red;
}
</style>
