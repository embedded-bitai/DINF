<template>
  <Layout>
    <template #content>
      <v-container fill-height>
        <div fill-height>
          <h1>hi</h1>
        </div>
      </v-container>
        <v-parallax src="@/assets/3.jpg" height="750">
          <v-row
            align="left"
            justify="left"
            text-align="left"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              <h1>
                Looking for some good music?
              </h1>
              <h4 class="subheading">
                we can find perfect songs just for you!
              </h4>
            </v-col>
          </v-row>
        </v-parallax>
      <div id="info">
        <p v-scrollanimation>IZIHA</p><br>
        <p>2020.09.26 SAT 9PM</p>
        <h3>#EXPERIMENTAL #ELECTRONIC </h3>
      </div>
        <v-parallax src="@/assets/4.jpg" max-height="500px"></v-parallax>
    </template>
  </Layout>
</template>c

<script>
import Layout from '../components/Layout'
import { mapState } from 'vuex'
export default {
  components: { Layout },
  computed: {
    ...mapState({
      lists: state => state.lists
    })
  },
  methods: {
  }
}
</script>

<style>
  div {
    /* border: 2px solid black; */
  }
  #text {
    height: 60px;
    padding: 20px;
    color: black;
  }
  #info {
    height: 150px;
    padding: 20px;
    color: #90A4AE;
  }
  #content {
    height: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>
