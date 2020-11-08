<template>
  <v-responsive style="aspect-ratio: 16:9">
    <v-main>
      <Layout>
        <template>
        <div class="header">
          WTF
        </div>
        </template>
      </Layout>
    </v-main>
  </v-responsive>
</template>

<script>
import Layout from '../components/Layout'

export default {
  components: { Layout }
}
</script>

<style scoped>
.header {
  font-size: 75px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 900;
  max-width: 100%;
  height: 37%;
  text-align: left;
  padding: 0px;
  margin-top: 50%;
}
</style>
