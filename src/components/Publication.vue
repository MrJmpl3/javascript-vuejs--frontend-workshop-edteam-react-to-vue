<template>
  <article class="publication s-border-top s-py-3">
    <div class="publication__container">
      <h2 class="publication__title t3">{{ title }}</h2>
      <span>
        <b>{{ author }}</b> a las {{ fecha }}
      </span>
      <div class="publication__content">
        <p>{{ content }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Publication",
  props: {
    title: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    },
    fecha: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
