
 //配置vuex的步骤
//1.运行 npm install vuex --save
import Vue from 'vue'

import Vuex from 'vuex'
 import axios from 'axios'
//2.导入包  import Vue from 'vue'    import Vuex from 'vuex'
Vue.use(Vuex);
// 3.注册vuex到vue中   Vue.use(Vuex);
 //创建一个new Vuex.Store()实例,得到一个 数据仓储对象
const store = new Vuex.Store({
  //state相当于vue中的data
  state: {
    count:[],
  },
  //mutations相当于vue中的methods
  mutations: {
  //   new1(state,path) {
  //    axios.get(path).then((res) => {
  //       state.count = res.data.data.commentList;
  //     })
  //   }
    new1(state) {
      axios.get('../../static/mock/1.json').then((res) => {
        return state.count = res.data.data.commentList;
      })
    },
    new2(state) {
      axios.get('../../static/mock/2.json').then((res) => {
        return state.count = res.data.data.commentList;
      })
    },
    new3(state) {
      axios.get('../../static/mock/3.json').then((res) => {
        return state.count = res.data.data.commentList;
      })
    },
  }

})


export default store
