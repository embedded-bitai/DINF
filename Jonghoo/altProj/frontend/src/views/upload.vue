<template>
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
      file: ''
    }
  },
  components: { Layout },
  methods: {
    onUpload () {
      const formData = new FormData()
      formData.append('file', this.file)

      this.axios.post('http://localhost8080/api.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (data) {
        console.log(data.data)
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
