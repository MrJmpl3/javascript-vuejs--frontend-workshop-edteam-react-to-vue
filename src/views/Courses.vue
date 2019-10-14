<template>
  <div id="Courses">
    <the-banner
      color="dark-color"
      :image="{
        src:
          'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
        alt: 'Banner Especialidades'
      }"
      title="Nuestros cursos"
      subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
    />
    <main class="ed-grid m-grid-5">
      <card
        v-for="course in courses"
        :key="course.id"
        path="cursos"
        :picture="course.picture"
        :name="course.name"
        :card="course.id"
      />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheBanner from "../components/TheBanner";
import Card from "../components/Card";

export default {
  name: "Courses",
  components: { TheBanner, Card },
  computed: {
    ...mapState(["courses"])
  },
  mounted() {
    this.$store.dispatch("getAllCourses");
  }
};
</script>

<style scoped></style>
