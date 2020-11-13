<template>
<v-main>
  <v-app-bar height="100px" app flat color="#FFFFFF" hide-on-scroll target="#tarege" scroll-threshold="150">
    <v-toolbar-title>
      <div @click="Home">
        <h1>BIT IMAGE</h1>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="menubar">
      <v-btn next to="/" text color="black" style="padding: 10px; width: 90px;">Home</v-btn>
      <v-btn next to="member" text color="black" style="padding: 10px; width: 90px;">my</v-btn>
      <v-btn next to="about" text color="black" style="padding: 10px; width: 90px;">about</v-btn>
      <v-btn @click="onClickLogout" text color="black" style="padding: 10px; width: 90px;" v-if="isLogedin">Logout</v-btn>
      <v-btn next to="/login" text color="black" style="padding: 10px; width: 90px;" v-else>Login</v-btn>
    </slot>
  </v-app-bar>
  <v-container fluid>
    <v-content id="content" style="padding: 0px">
      <slot name="content">
      </slot>
    </v-content>
  </v-container>
</v-main>
</template>

<script>
import router from '../router'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({}),
  methods: {
    Home () {
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    },
    onClickLogout () {
      this.logout()
      alert('로그아웃 되었습니다.')
      this.$router.push({ name: 'home' })
        .catch(err => {
          console.log(err)
        })
    },
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters([
      'isLogedin'
    ])
  }
}
</script>
