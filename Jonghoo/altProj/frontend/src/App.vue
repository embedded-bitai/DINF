<template>
  <v-app>
    <transition name="view">
      <router-view/>
    </transition>
  </v-app>
</template>

<style scoped>
.view-enter-acitve, .view-leave.active {
  transition: opcacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter, .view-leave-to {
  opacity: 0;
}

.view-enter-to, .view-leave {
  opacity: 1;
}
</style>
