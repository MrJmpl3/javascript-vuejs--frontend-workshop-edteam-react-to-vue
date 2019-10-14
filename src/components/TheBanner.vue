<template>
  <div class="main-banner img-container l-block" :class="color">
    <div class="ed-grid">
      <div>
        <img :src="image.src" :alt="image.alt" class="main-banner__img" />
        <div v-if="home" class="ed-grid m-grid-2">
          <div class="main-banner__data">
            <h1 class="main-banner__title">{{ title }}</h1>
            <p>{{ subtitle }}</p>
            <router-link to="/cursos" class="button second-color">
              Ver cursos
            </router-link>
          </div>
          <div class="img-container s-ratio-16-9">
            <img :src="poster" alt="Curso actual" />
          </div>
        </div>
        <div v-else-if="courseBanner" class="ed-grid m-grid-3">
          <div class="main-banner__data m-cols-2">
            <h1 class="main-banner__title s-mb-0">{{ title }}</h1>
            <p class="s-opacity-6">{{ subtitle }}</p>
            <p>{{ info }}</p>
            <p v-if="especialidad">
              Esta curso forma parte de la especilidad
              <router-link to="/especialidades">{{ especialidad }}</router-link>
            </p>
          </div>
          <div class="img-container s-ratio-16-9 m-cols-1">
            <img :src="poster" alt="Curso actual" />
          </div>
        </div>
        <div v-else class="main-banner__data s-center">
          <h1 class="main-banner__title">{{ title }}</h1>
          <p>{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBanner",
  props: {
    color: {
      type: String,
      default: ""
    },
    image: {
      type: Object,
      default: function() {
        return {
          src: "",
          alt: ""
        };
      }
    },
    home: {
      type: Boolean,
      default: false
    },
    courseBanner: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    poster: {
      type: String,
      default: ""
    },
    especialidad: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
