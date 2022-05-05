<template>
  <div :class="firstName">
    <p>my age is {{ age }}</p>
    <slot />
    {{ fullName }}
    <button @click="setName">Change Name</button>
    <input v-model="lastName" />
    <div v-if="firstName == 'Bach'">You are Bach</div>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.work }}
    </li>
  </div>
</template>

<script>
export default {
  emits: ["changeAge"],
  props: {
    age: String,
  },
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      todos: [
        { id: 1, work: "Code" },
        { id: 2, work: "Eat" },
        { id: 3, work: "Sleep" },
      ],
    };
  },
  methods: {
    setName() {
      this.firstName = "Bach";
      this.$emit("changeAge", "50");
    },
  },
  computed: {
    fullName() {
      return this.firstName + "|" + this.lastName;
    },
  },
  watch: {
    fullName(value) {
      console.log("full name changed " + value);
    },
    firstName(value) {
      console.log("first name changed " + value);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
};
</script>

<style>
.Bach {
  color: red;
}
</style>
