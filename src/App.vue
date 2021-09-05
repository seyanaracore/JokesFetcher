<template>
  <div id="app">
    <jokes list-name="Jokes" :jokesList="jokesList" />
  </div>
</template>

<script>
import Jokes from "./components/Jokes.vue";
import getJokes from "./api/getJokes.js";
import localStorageUtil from "./utils/localStorage.js";

export default {
  name: "App",

  components: { Jokes },

  data() {
    return {
      jokesList: [],
    };
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
}
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-icons/font/bootstrap-icons.css";
</style>
