<template>
<v-responsive style="aspect-ratio: 16:9">
  <v-main>
    <Layout>
      <template #content>
        <v-container fluid class="header">
          <v-row>
          <v-col class="col">
            <div class="text">
              <p v-scrollanimation>BIT IMAGE는 기계 학습을 통해</p>
              <p v-scrollanimation>당신의 이미지를 분석합니다.</p>
              <br/>
              <h6 v-scrollanimation>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna. Massa eget egestas purus viverra accumsan in nisl. Integer enim neque volutpat ac tincidunt. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Est sit amet facilisis magna etiam tempor orci. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Et pharetra pharetra massa massa. Et magnis dis parturient montes nascetur ridiculus. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Elementum facilisis leo vel fringilla est. Ut morbi tincidunt augue interdum velit. Ullamcorper dignissim cras tincidunt lobortis feugiat. Vel facilisis volutpat est velit egestas. Sodales ut etiam sit amet nisl purus in mollis. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam vestibulum morbi blandit cursus risus at.
              </h6>
            </div>
          </v-col>
          <v-col class="col" md="5">
            <v-parallax
            src="@/assets/10.jpg"
            height="1000"
            />
          </v-col>
          </v-row>
          <div class="button">
            <v-btn next to="/upload">시작하기</v-btn>
          </div>
        </v-container>
        <v-parallax src="@/assets/3.jpg" height="750">
          <v-row align="left" justify="left" text-align="left">
            <v-col class="text-center" cols="12">
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
  </v-main>
</v-responsive>
</template>

<script>
import Layout from '../components/Layout'

import {
  mapState,
  mapGetters
} from 'vuex'

export default {
  data () {
    return {
      test: ''
    }
  },
  components: {
    Layout
  },
  computed: {
    ...mapState({
      lists: state => state.lists
    }),
    ...mapGetters([
      'isLogedin'
    ])
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
h6 {
  font-size: 20px;
}

.header {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  max-width: 100%;
  height: 37%;
  text-align: left;
  padding: 0px;
  margin-top: 0%;
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
.text {
  font-size: 80px;
  font-weight: 900;
}
</style>
