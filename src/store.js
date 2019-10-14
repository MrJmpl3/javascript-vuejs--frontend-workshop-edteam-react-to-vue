import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API_URL = process.env.VUE_APP_API_URL;

const GET_ALL_POSTS = "GET_ALL_POSTS";
const GET_ALL_SPECIALITIES = "GET_ALL_SPECIALITIES";
const GET_SPECIALITY = "GET_SPECIALITY";
const GET_ALL_COURSES = "GET_ALL_COURSES";
const GET_COURSE = "GET_COURSE";
const GET_FRAGMENT = "GET_FRAGMENT";
const GET_ALL_TEACHERS = "GET_ALL_TEACHERS";

export default new Vuex.Store({
  state: {
    posts: [],
    specialities: [],
    speciality: null,
    courses: [],
    course: null,
    teachers: [],
    fragment: null
  },
  mutations: {
    [GET_ALL_POSTS](state, payload) {
      state.posts = payload.posts;
    },
    [GET_ALL_SPECIALITIES](state, payload) {
      state.specialities = payload.specialities;
    },
    [GET_SPECIALITY](state, payload) {
      state.speciality = payload.speciality;
    },
    [GET_ALL_COURSES](state, payload) {
      state.courses = payload.courses;
    },
    [GET_COURSE](state, payload) {
      state.course = payload.course;
    },
    [GET_ALL_TEACHERS](state, payload) {
      state.teachers = payload.teachers;
    },
    [GET_FRAGMENT](state, payload) {
      state.fragment = payload.fragment;
    }
  },
  actions: {
    getAllPosts({ commit }) {
      axios.get(`${API_URL}/posts`).then(resp => {
        return commit({
          type: GET_ALL_POSTS,
          posts: resp.data
        });
      });
    },
    getAllSpecialities({ commit }) {
      axios.get(`${API_URL}/especialidades`).then(resp => {
        return commit({
          type: GET_ALL_SPECIALITIES,
          specialities: resp.data
        });
      });
    },
    getSpeciality({ commit }, id) {
      axios.get(`${API_URL}/especialidad/${id}`).then(resp => {
        return commit({
          type: GET_SPECIALITY,
          speciality: resp.data
        });
      });
    },
    getAllCourses({ commit }) {
      axios.get(`${API_URL}/cursos`).then(resp => {
        return commit({
          type: GET_ALL_COURSES,
          courses: resp.data
        });
      });
    },
    getCourse({ commit }, id) {
      axios.get(`${API_URL}/curso/${id}`).then(resp => {
        return commit({
          type: GET_COURSE,
          course: resp.data
        });
      });
    },
    getAllTeachers({ commit }) {
      axios.get(`${API_URL}/profesores`).then(resp => {
        return commit({
          type: GET_ALL_TEACHERS,
          teachers: resp.data
        });
      });
    },
    getFragment({ commit }, id) {
      axios.get(`${API_URL}/clase/${id}`).then(resp => {
        return commit({
          type: GET_FRAGMENT,
          fragment: resp.data
        });
      });
    }
  }
});
