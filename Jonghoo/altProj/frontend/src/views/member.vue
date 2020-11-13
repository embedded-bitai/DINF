<template>
<v-responsive style="aspect-ratio: 16:9">
  <v-main>
    <template>
      <Layout>
        <template #content>
          <v-row>
            <v-col class="jh">
              <template>
              h
              </template>
            </v-col>
            <v-col class="ky">
              <template>
              h
              </template>
            </v-col>
          </v-row>
        </template>
      </Layout>
    </template>
  </v-main>
</v-responsive>
</template>

<script>
import Layout from '../components/Layout'
export default {
  components: {
    Layout
  }
}
</script>

<style scoped>
.ky {
  background-color: aqua;
  height: 10000px;
}
.jh {
  background-color: bisque;
  max-height: 10000px;
}
</style>
