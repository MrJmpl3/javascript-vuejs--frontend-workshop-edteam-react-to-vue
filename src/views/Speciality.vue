<template>
  <div v-if="speciality" id="Speciality">
    <the-banner
      color="dark-color"
      :title="speciality.data.name"
      :subtitle="speciality.data.subtitle"
      :course-banner="true"
      :poster="speciality.data.picture"
      :info="speciality.data.information"
      :image="{
        src:
          'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs',
        alt: speciality.data.name
      }"
    />
    <main class="ed-grid lg-grid-10">
      <div class="lg-cols-7">
        <div
          class="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap"
        >
          <div>
            <h3 class="t4">¿Qué aprenderás?</h3>
            <ul>
              <li
                v-for="abilities in speciality.data.abilities"
                :key="abilities.id"
              >
                {{ abilities.description }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="t4">Cónocimientos previos</h3>
            <ul>
              <li
                v-for="knowledge in speciality.data.knowledge"
                :key="knowledge.id"
              >
                {{ knowledge.description }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="t4">Nivel</h3>
            <p>{{ speciality.data.level }}</p>
          </div>
        </div>
        <h2>Temario de la especialidad</h2>
        <div
          class="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom"
        >
          <div
            v-for="course in speciality.data.courses"
            :key="course.id"
            class="course-class l-section"
          >
            <div class="ed-grid m-grid-3">
              <router-link to="/cursos/1">
                <img :src="course.picture" :alt="course.name" />
              </router-link>
              <div class="m-cols-2">
                <h3>{{ course.name }}</h3>
                <p>{{ course.information }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheBanner from "../components/TheBanner";

export default {
  name: "Speciality",
  components: { TheBanner },
  computed: {
    ...mapState(["speciality"])
  },
  mounted() {
    // En la DB de prueba solo existe una especialidad si quieres que sea dinamico se usar "this.$route.params"
    // para obtener los parametros de la url
    // Ejemplo:
    // this.$store.dispatch("getSpeciality", this.$route.params.id);
    this.$store.dispatch("getSpeciality", 1);
  }
};
</script>

<style scoped></style>
