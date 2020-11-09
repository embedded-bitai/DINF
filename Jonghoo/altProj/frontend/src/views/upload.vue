<template>
<v-responsive style="aspect-ratio: 16:9">
  <v-main>
  <Layout>
    <template #content>
    <v-container>
      <label for="file">File
        <input
          placeholder=''
          accept="audio/*"
          type="file"
          id="file"
          ref="file"
          @change="onFileSelected()"
          class="inputfile"
        />
      </label>
      <progress max="100" :value.prop="uploadPercentage"/>
      </v-container>

      <div align="center">
        <v-btn outlined color="gray"
               style="padding: auto width: auto"
               @click="onUpload()"
               >
          분석 결과 보기
        </v-btn>
      </div>
    </template>
  </Layout>
  </v-main>
</v-responsive>
</template>

<script>
import Layout from '../components/Layout'
// @ is an alias to /src
/* eslint-disable no-unused-vars */
import store from '../store'
import Vue from 'vue'
import router from '../router'
import axios from 'axios'

export default {
  name: 'upload',
  data () {
    return {
      selectedFile: null,
      file: '',
      uploadPercentage: 0
    }
  },
  components: { Layout },
  methods: {
    onUpload () {
      const formData = new FormData()
      formData.append('file', this.file)
      this.axios.post('http://127.0.0.1:5000/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadPercentage: function (progressEvent) {
            this.uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
          }.bind(this)
        }).then(function (data) {
        console.log(data.data)
        this.$router.push({
          name: 'analysis'
        })
      })
        .catch(function () {
          console.log('업로드에 실패하였습니다.')
        })
    },
    onFileSelected () {
      this.file = this.$refs.file.files[0]
      console.log('업로도된 파일: ', this.file)
    }
  }
}
</script>

<style>
.inputfile {
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
}
.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: red;
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}
</style>
