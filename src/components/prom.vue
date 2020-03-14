<template>
  <div>
    您高
    <ul>
      <li v-for="(item,key) in   this.$store.state.count" class="ddiv" :key="key">
        <img :src="item.imgSrc" alt="">
        <div class="ss">
          <p>{{item .commentTxt}}</p>
          <p>{{item.createAt}}</p>
        </div>
      </li>
    </ul>
    <hr>
    <div>
      <button @click="new1">第一个数据</button>
      <button @click="new2">第二个数据</button>
      <button @click="new3">第三个数据</button>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "prom",
    data() {
      return {
        // list:[]

      }
    },
    created() {//实例初始化之后，操作data

        axios.get('../../static/mock/1.json').then((res) => {
          this.$store.state.count = res.data.data.commentList;
        })
      },


    methods: {


      // load (path){
      //   axios.get(path).then((res) => {
      //     this.list = res.data.data.commentList;
      //   });

        new2() {
       this.$store.commit("new2");

        },
        new1() {
          this.$store.commit("new1");
        },
        new3() {
           this.$store.commit("new3");
        }
      // },


    }
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  ddiv {
    width: 100%;
    height: 400px;
    line-height: 400px;
    bottom: 30px
  }

  button {
    margin-top: 40px;
    background-color: #42b983;
    outline-style: none;
    bottom: 0;
  }

  span {
    height: 150px;
  }

  p:last-of-type {
    position: absolute;
    right: 0;
  }

  img {
    left: 0;
    width: 60px;
    height: 60px;
  }


</style>
