<template>
  <div v-if="course" id="Course">
    <the-banner
      color="dark-color"
      :title="course.name"
      :subtitle="course.subtitle"
      :image="{
        src:
          'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs',
        alt: course.name
      }"
      :course-banner="true"
      :poster="course.picture"
      :especialidad="course.data.specialities[0].name"
      :info="course.information"
    />
    <main class="ed-grid lg-grid-10">
      <div class="lg-cols-7">
        <div
          class="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap"
        >
          <div>
            <h3 class="t4">¿Qué aprenderás?</h3>
            <!-- eslint-ignore-next-line vue/no-v-html -->
            <ul v-html="course.you_learn" />
          </div>
          <div>
            <h3 class="t4">Cónocimientos previos</h3>
            <!-- eslint-ignore-next-line vue/no-v-html -->
            <ul v-html="course.requirements" />
          </div>
          <div>
            <h3 class="t4">Nivel</h3>
            <p>{{ course.level }}</p>
          </div>
        </div>
        <h2>Temario del curso</h2>
        <div
          class="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom"
        >
          <div
            v-for="clase in course.data.classes"
            :key="clase.class.id"
            class="course-class l-section"
          >
            <h3>{{ clase.class.title }}</h3>
            <p>{{ clase.class.description }}</p>
            <ul class="data-list">
              <li v-for="subject in clase.subjects" :key="subject.subject.id">
                <router-link
                  :to="`/clase/${subject.subject.id}`"
                  class="color dark-color"
                >
                  {{ subject.subject.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg-cols-3">
        <h2 class="t3">Profesor</h2>
        <p>Beto Quiroga</p>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheBanner from "../components/TheBanner";

export default {
  name: "Course",
  components: { TheBanner },
  computed: {
    ...mapState(["course"])
  },
  mounted() {
    // En la DB de prueba solo existe una especialidad si quieres que sea dinamico se usar "this.$route.params"
    // para obtener los parametros de la url
    // Ejemplo:
    // this.$store.dispatch("getCourse", this.$route.params.id);
    this.$store.dispatch("getCourse", 1);
  }
};
</script>

<style scoped></style>
