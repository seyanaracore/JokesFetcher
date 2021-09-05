<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 col-sm-10 col-lg-6">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <jokes-filter :jokesList="jokesList" @filterJokes="setFilteredJokes" />
    </div>
    <jokes-list
      :jokesList="jokesList"
      :filteredJokesList="filteredJokes ? filteredJokes : jokesList"
    />
  </div>
</template>

<script>
import JokesList from "./JokesList.vue";
import JokesFilter from "./JokesFilter.vue";

export default {
  components: { JokesList, JokesFilter },

  props: {
    listName: String,
    jokesList: {
      type: Array,
      defult: () => [],
    },
  },

  data() {
    return {
      filteredJokes: null,
    };
  },

  methods: {
    setFilteredJokes(filteredJokes) {
      this.filteredJokes = filteredJokes;
    },
  },
};
</script>

<style>
.row {
  justify-content: center;
}
</style>
