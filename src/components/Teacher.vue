<template>
  <article>
    <div class="s-px-4">
      <div class="img-container circle s-mb-2">
        <img :src="picture" :alt="name" />
      </div>
    </div>
    <div class="s-center">
      <p class="t3 s-mb-1">{{ name }}</p>
      <p>{{ country }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Teacher",
  props: {
    picture: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
