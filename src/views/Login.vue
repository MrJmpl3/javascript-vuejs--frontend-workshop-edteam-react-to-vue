<template>
  <div id="Login" class="ed-grid">
    <div class="l-block"></div>
    <div class="m-to-center m-60 lg-30">
      <h1 class="center">Iniciar sesión</h1>
      <form @submit.prevent="authentication">
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
          ¿No tienes cuenta de usuario?
          <router-link to="/registro">Crear cuenta</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    authentication() {
      const data = {
        email: this.email,
        password: this.password
      };

      axios
        .post("https://api-edteam.alejogs4.now.sh/login", data)
        .then(r => {
          localStorage.setItem("token", r.data.token);
          window.location = "/";
        })
        .catch(e => {
          alert("Error al iniciar sesión");
        });
    }
  }
};
</script>

<style scoped></style>
