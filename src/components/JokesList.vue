<template>
  <div class="row">
    <div class="col-12 col-sm-10 col-lg-6">
      <ul class="list-group">
        <joke
          v-for="(joke, index) in filteredJokesList"
          :key="index"
          @likeIt="likeIt"
          :joke="joke"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Joke from "./Joke.vue";

export default {
  props: {
    jokesList: {
      type: Array,
      default: () => [],
    },
    filteredJokesList: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    likeIt(filteredJokeId) {
      this.jokesList.forEach((joke) => {
        if (joke.id !== filteredJokeId) return;
        joke.liked === undefined
          ? this.$set(joke, "liked", true)
          : (joke.liked = !joke.liked);
      });
    },
  },

  components: { Joke },
};
</script>
