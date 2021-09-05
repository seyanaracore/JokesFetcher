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

  methods: {
    jokeComparison(jokesArray, joke) {
      return jokesArray.filter((jokeNL) => jokeNL.id === joke.id)[0];
    },

    saveLikedJokes() {
      let newLikedJokes = this.jokesList.filter((joke) => joke.liked); //Получаем лайкнутые шутки
      let prevLikedJokes = localStorageUtil.get("likedJokes"); //Получаем уже существующие лайкнутые шутки из LocalStorage

      if (prevLikedJokes?.length) {//Проверяем наличие данных
        let likedJokes = prevLikedJokes.filter((joke) => { // Обновляем список шуток. Отфильтровываем дублирующие шутки с которых убрали лайк
          const repeatedJoke = this.jokeComparison(this.jokesList, joke);

          if (!repeatedJoke) return true;
          repeatedJoke.liked ? true : false;
        });
        newLikedJokes.map((joke) => {
          //Добавляем новые лайкнутые шутки в массив с предыдущими
          const repeatedJoke = this.jokeComparison(prevLikedJokes, joke);
          if (!repeatedJoke) likedJokes.unshift(joke);
        });
        localStorageUtil.set("likedJokes", likedJokes);
      } else if (newLikedJokes.length) {
        localStorageUtil.set("likedJokes", newLikedJokes);
      }
    },

    getLikedJokes() {
      const likedJokes = localStorageUtil.get("likedJokes"); //Получаем лайкнутые шутки

      if (!likedJokes || !likedJokes.length) return;
      this.jokesList.map((joke) => { //Если в пришедших есть дубликат шутки - добавляем свойство Liked
        const repeatedJoke = this.jokeComparison(likedJokes, joke);
        if (repeatedJoke) this.$set(joke, "liked", true);
      });
    },

    async getJokes() {
      await getJokes().then((result) => {
        this.jokesList = result.jokes;
        this.getLikedJokes();
      });
    },
  },

  mounted() {
    window.addEventListener("beforeunload", this.saveLikedJokes);
    this.getJokes();
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
