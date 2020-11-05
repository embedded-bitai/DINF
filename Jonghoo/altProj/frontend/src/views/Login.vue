<template>
<v-responsive style="aspect-ratio: 16:9">
  <v-main>
    <v-container fluid style="padding: 5px">
      <v-img src="@/assets/1.jpg" max-height="700px">
        <div id="header">
          <h1>BIT MUSIC</h1>
        </div>
        <v-row align="center" justify="center">
          <v-col sm="5" id="login">
            <login-form @submit="onSubmit" />
          </v-col>
        </v-row>
      </v-img>
    </v-container>
  </v-main>
</v-responsive>
</template>

<script>
import {
  mapActions
} from 'vuex'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  data () {
    return {
      userId: '', // 입력받은 아이디 값을 반환
      userPw: '' // 입력받은 패스워드 값을 반환
    }
  },
  methods: {
    // onSubmit은
    onSubmit (payload) {
      // console.log('loginPage onSubmit()')
      this.login(payload).then(res => {
        alert('성공적으로 로그인 하였습니다.')
        this.$router.push({
          name: 'home'
        })
      }).catch(err => {
        // alert(err.response.data.message)
        alert('아이디와 비밀번호를 확인하여 주세요.', err)
      })
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
div {
  /* border: 2px solid black; */
  font-family: Ubuntu;
  text-align: center;
  /* text-decoration: underline; */
  margin: 10px;
  padding: 20px;
}

#header {
  color: white;
  font-family: Ubuntu;
  font-size: 30px;
}

#login {
  background-color: rgba(255, 255, 255, 0.9);
  margin: 10px;
  padding: 60px
}

#text {
  height: 80px;
}
</style>
