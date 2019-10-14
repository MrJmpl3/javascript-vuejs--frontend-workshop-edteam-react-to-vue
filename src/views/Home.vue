<template>
  <div id="Home">
    <the-banner
      color="dark-color"
      :image="{
        src:
          'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs',
        alt: ''
      }"
      title="Bienvenido a la expericia más increible en educación online. Comienza hoy mismo a aprender"
      subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrás"
      :home="true"
      poster="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/EspecialidadEdicionAudioVisual.png"
    />
    <main class="ed-grid m-grid-3">
      <div class="l-section m-cols-2">
        <h2>Ultimas publicaciones</h2>
        <div v-if="posts.length > 0">
          <Publication
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :author="post.author"
            :fecha="post.fecha"
            :content="post.content"
          />
        </div>
        <p v-else>No existen publicaciones en la BD</p>
      </div>
      <div>
        <h3>Lista de categorías</h3>
        <ul class="data-list">
          <li><span>React.js</span></li>
          <li><span>React native</span></li>
          <li><span>Angular</span></li>
          <li><span>Vue.js</span></li>
          <li><span>HTML</span></li>
          <li><span>CSS</span></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheBanner from "../components/TheBanner";
import Publication from "../components/Publication";

export default {
  name: "Home",
  components: {
    TheBanner,
    Publication
  },
  computed: {
    ...mapState(["posts"])
  },
  mounted() {
    this.$store.dispatch("getAllPosts");
  }
};
</script>

<style></style>
