<template>
  <div id="Specialities">
    <the-banner
      color="first-color"
      :image="{
        src:
          'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg',
        alt: 'Banner Especialidades'
      }"
      title="Especialidades"
      subtitle="Domina un tecnología con las rutas de aprendizaje que te ofrecemos"
    />
    <main v-if="specialities.length > 0" class="ed-grid m-grid-3">
      <card
        v-for="speciality in specialities"
        :key="speciality.id"
        path="especialidades"
        :picture="speciality.picture"
        :name="speciality.name"
        :card="speciality.id"
      />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheBanner from "../components/TheBanner";
import Card from "../components/Card";

export default {
  name: "Specialities",
  components: {
    Card,
    TheBanner
  },
  computed: {
    ...mapState(["specialities"])
  },
  mounted() {
    this.$store.dispatch("getAllSpecialities");
  }
};
</script>

<style scoped></style>
