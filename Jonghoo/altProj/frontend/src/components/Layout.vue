<template>
  <v-main>
    <v-app-bar height="100px"
      app
      flat
      color="#FFFFFF"
      hide-on-scroll
      target="#tarege"
      scroll-threshold="250"
      >
      <v-toolbar-title><div @click="Success"><h1>BIT MUSIC</h1></div></v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="menubar">
        <v-btn next to="/" text color="black"
          style="padding: 10px; width: 90px;">Home</v-btn>
        <v-btn href="http://localhost:3000" text color="black"
          style="padding: 10px; width: 90px;">Mylist</v-btn>
        <v-btn @click="Archive" text color="black"
          style="padding: 10px; width: 90px;">Service</v-btn>
        <v-btn next to="/login" text color="black"
          style="padding: 10px; width: 90px;">Login</v-btn>
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
import { mapActions } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    left: false
  }),
  methods: {
    Success () {
      (window.location.pathname !== '/success') ? router.push('/success') : router.go(0)
    },
    Calender () {
      (window.location.pathname !== '/calender') ? router.push('/calender') : router.go(0)
    },
    Archive () {
      (window.location.pathname !== '/archive') ? router.push('/archive') : router.go(0)
    },
    onClickLogout () {
      this.logout()
      alert('Success Logout')
      this.$router.push({ name: 'home' })
    },
    ...mapActions(['logout'])
  }
}

</script>
