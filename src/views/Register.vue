<template>
  <div id="Register" class="ed-grid">
    <div class="l-block"></div>
    <div class="m-to-center m-60 lg-30">
      <h1 class="center">Crear cuenta</h1>
      <form @submit.prevent="registration">
        <div class="form__item">
          <label for="fullname">
            Nombre completo
            <input
              id="fullname"
              v-model="fullname"
              type="text"
              name="fullname"
              placeholder="Ingrese su nombre"
              required
            />
          </label>
        </div>
        <div class="form__item">
          <label for="email">
            Correo electrónico
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              placeholder="Ingrese su e-mail"
              required
            />
          </label>
        </div>
        <div class="form__item">
          <label for="password">
            Contraseña
            <input
              id="password"
              v-model="password"
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required
            />
          </label>
        </div>
        <div class="form_item">
          <input type="submit" class="button full" value="Iniciar sesión" />
        </div>
      </form>
      <div class="center">
        <p>
          ¿Ya tienes cuenta de usuario?
          <router-link to="/login">Iniciar sesión</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      fullname: "",
      password: ""
    };
  },
  methods: {
    registration() {
      const data = {
        email: this.email,
        name: this.fullname,
        password: this.password
      };

      axios
        .post(`https://api-edteam.alejogs4.now.sh/signup`, data)
        .then(() => {
          alert("Usuario creado");
          window.location = "/login";
        })
        .catch(() => alert("Error al crear usuario"));
    }
  }
};
</script>

<style scoped></style>
