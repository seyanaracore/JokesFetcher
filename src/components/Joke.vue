<template>
  <li
    class="d-flex align-items-center list-group-item"
    :class="{ likedJoke: joke.liked }"
  >
    <div class="jokeItem">
      <span class="fw-bold">{{ joke.setup || joke.joke }}</span>
      <span v-if="joke.delivery" class="fw-light">{{ joke.delivery }}</span>
    </div>
    <button
      type="button"
      class="btn btn-secondary"
      @click="$emit('likeIt', joke.id)"
    >
      <i class="bi bi-heart-fill"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    joke: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.jokeItem {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.d-flex {
  justify-content: space-between;
}
.fw-bold {
  width: 100%;
  word-break: break-all;
}
.fw-light {
  margin-top: 5px;
}
.likedJoke {
  background-color: #c7f1cc !important;
  & > .btn {
    background: #dc3545 !important;
    border-color: #dc3545 !important;
  }
}
</style>
