<template>
  <div>
    <b-button @click="login">Login</b-button>
    <NuxtLink to="/">To Home page</NuxtLink>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "custom",
  methods: {
    ...mapActions(["login"]),
  },
  computed: {
    ...mapState({
      loggedIn: "loggedIn",
    }),
  },
};
</script>
