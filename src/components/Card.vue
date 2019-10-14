<template>
  <article class="card s-border">
    <div class="img-container s-ratio-16-9">
      <router-link :to="`/${path}/${card}`">
        <img :src="picture" :alt="name" />
      </router-link>
    </div>
    <div class="card__data s-pxy-2">
      <h3 class="t4 center">{{ name }}</h3>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    path: {
      type: String,
      default: ""
    },
    card: {
      type: Number,
      default: 0
    },
    picture: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
