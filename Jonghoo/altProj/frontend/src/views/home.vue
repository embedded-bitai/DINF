<template>
  <Layout>
    <template #content>
      <v-container class="header">
        <v-parallax src="@/assets/testing.jpg">
          <p v-scrollanimation>매일 똑같은 노래를 듣는 당신에게</p>
          <p v-scrollanimation>한번의 클릭만으로 자기 자신을 찾아보세요</p>
        </v-parallax>
        <div class="button">
          <v-btn next to="/upload">시작하기</v-btn>
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
                딥러닝 기반으로한 음악 추천 서비스
              </h1>
              <h4 class="subheading">
                5000가지 이상의 데이터로 당신의 취향을 분석해드립니다
              </h4>
            </v-col>
          </v-row>
        </v-parallax>
      <div id="info">
      </div>
        <v-parallax src="@/assets/4.jpg" max-height="500px"></v-parallax>
    </template>
  </Layout>
</template>

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
  .header {
    font-size: 75px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    max-width: 100%;
    height: 37%;
    text-align: left;
    padding: 0px;
    margin-top: 10%;
  }
  .button {
    height: 60px;
    text-align: center;
    margin-top: 9%;
  }

  .before-enter {
    opacity: 0;
    transform: translateX(500px);
    transition: all 2.5s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateX(0px);
  }

</style>
