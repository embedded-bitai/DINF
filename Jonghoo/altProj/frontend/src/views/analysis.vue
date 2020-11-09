<template>
  <Layout>
    <template #content>
      <template>
        <v-responsive style="aspect-ratio: 16:9">
          <v-main id="inspire">
            <v-container fluid style="padding: 5px">
              <button v-on:click="getData">이미지 가져오기</button>
            </v-container>
          </v-main>
        </v-responsive>
      </template>
    </template>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
// @ is an alias to /src
/* eslint-disable no-unused-vars */
import store from "../store";
import Vue from "vue";
import router from "../router";
import axios from "axios";

export default {
  methods: {
    getData: function () {
      axios
        .get("http://127.0.0.1:5000/upload")
        .then(function (res) {
          console.log(res);
        })
        .catch(function (e) {
          console.error(e);
        });
    },
  },
  components: {
    Layout,
  },
};
</script>

<style>
</style>
