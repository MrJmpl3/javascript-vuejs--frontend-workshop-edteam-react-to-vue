<template>
  <div id="Teachers">
    <the-banner
      color="third-color"
      :image="{
        src:
          'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
        alt: 'Banner profesores'
      }"
      title="Nuestros profesores"
      subtitle="Este
    plantel docente está altamente calificado para guiarte en tu educación."
    />
    <main class="ed-grid m-grid-3 lg-grid-4 row-gap">
      <teacher
        v-for="teacher in teachers"
        :key="teacher.id"
        :picture="teacher.picture"
        :name="teacher.name"
        :country="teacher.country"
      />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheBanner from "../components/TheBanner";
import Teacher from "../components/Teacher";

export default {
  name: "Teachers",
  components: { TheBanner, Teacher },
  computed: {
    ...mapState(["teachers"])
  },
  mounted() {
    this.$store.dispatch("getAllTeachers");
  }
};
</script>

<style scoped></style>
