<template>
  <v-responsive style="aspect-ratio: 16:9">
    <v-main>
      <Layout>
        <template #content>
          <div align-center>
              <img
                    src="@/assets/cara.png"
                    max-width=250px
                    max-height=250x
                    align-content="center"
              />
              <div>
                <h1>어서오세요 당신의 이미지를 올려주세요</h1>
                <h1>이미지를 올리면 물체를 파악하여 결과값을 보여줍니다.</h1>
              </div>
          </div>
            <div>
              <input type='file' @change="onFileSelected">
              <button @click="onUpload">upload</button>
            </div>
        </template>
      </Layout>
    </v-main>
  </v-responsive>
</template>

<script>
import axios from 'axios'
import Layout from '../components/Layout'

export default {
  data () {
    return {
      selectedFile: null
    }
  },
  components: {
    Layout
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    onUpload () {
      const fd = new FormData()
      fd.append('inmage', this.selectedFile, this.selectedFile.name)
      axios.post('http://127.0.0.1:5000/', fd)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>
div {
  border: 2px solid black;
}
.md-grow-0 {
  flex-grow: 0;
}
.bot {
}
</style>
