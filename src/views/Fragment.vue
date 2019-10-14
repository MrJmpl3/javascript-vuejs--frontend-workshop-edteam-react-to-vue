<template>
  <div id="Fragment" class="class-page-container background dark-color s-pxy-4">
    <div v-if="course && fragment" class="ed-grid lg-grid-12">
      <div class="lg-cols-8 ">
        <div>
          <vimeo-player :video-id="fragment.video" />
        </div>
        <div>
          <h1 class="t3 color accent-color s-mb-0">{{ fragment.name }}</h1>
          <span class="color light-color">{{ course.name }}</span>
        </div>
      </div>
      <div class="lg-cols-4">
        <div>
          <h2 class="t3">Temario del curso</h2>
          <div
            v-for="clase in course.data.classes"
            :key="clase.class.id"
            class="course-class l-section"
          >
            <h3 class="color light-color">{{ clase.class.title }}</h3>
            <ul class="data-list">
              <li v-for="subject in clase.subjects" :key="subject.subject.id">
                <router-link
                  :to="`/clase/${subject.subject.id}`"
                  class="color light-color"
                >
                  {{ subject.subject.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Fragment",
  computed: {
    ...mapState(["course", "fragment"])
  },
  mounted() {
    this.$store.dispatch("getCourse", 1);
    this.$store.dispatch("getFragment", 123);
  }
};
</script>

<style scoped></style>
