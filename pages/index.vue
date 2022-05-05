<template>
  <div>
    <p v-if="loggedIn">You are logged in</p>
    <TestComponent></TestComponent>
    <Todo></Todo>
  </div>
</template>

<script>
import Card from "~/components/Card";

import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  components: {
    Card,
  },
  computed: {
    ...mapState({
      loggedIn: "loggedIn",
    }),
  },
};
</script>
