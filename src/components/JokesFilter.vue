<template>
  <form class="col-12 col-sm-10 col-lg-6" @submit.prevent>
    <input
      v-model="filterWords"
      type="text"
      class="form-control"
      placeholder="Введите слово для поиска среди анекдотов..."
    />
  </form>
</template>

<script>
export default {
  props: ["jokesList"],

  data() {
    return {
      filterWords: "",
    };
  },

  watch: {
    filterWords() {
      const { filterWords, jokesList } = this;
      let filteredJokes = jokesList.filter((joke) => {
        let props = ["setup", "delivery", "joke"];
        let jokeText = "";
        if (joke[props[0]]) jokeText += joke[props[0]];
        if (joke[props[1]]) jokeText += joke[props[1]];
        if (joke[props[2]]) jokeText += joke[props[2]];
        return jokeText.toLowerCase().includes(filterWords.toLowerCase());
      });
      this.$emit("filterJokes", filteredJokes);
    },
  },
};
</script>
