<template>
  <ul>
    <li><router-link exact to="/">Inicio</router-link></li>
    <li><router-link to="/especialidades">Especialidades</router-link></li>
    <li><router-link to="/cursos">Cursos</router-link></li>
    <li><router-link to="/profesores">Profesores</router-link></li>
    <li><span @click="removeToken">Cerrar Sesión</span></li>
  </ul>
</template>

<script>
export default {
  name: "PrivateMenu",
  methods: {
    removeToken() {
      localStorage.removeItem("token");
      window.location = "/login";
    }
  }
};
</script>

<style scoped></style>
