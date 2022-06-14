import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'
import order from './order'
import { Product } from '@/data/entitled'

Vue.use(Vuex)

export default new Vuex.Store({                                                           
  //引用store模組，會多包一層
  //例如state.order:{"buyingProducts:87"}為引進order模組的state的狀態
  state: {
    products:null as any,
    showProducts:null as any,
    orderProducts:null as any,
    cartProducts:null as any
  },
  mutations: {
    fillProducts(state,data){
      state.products=data
    },
    fillCart(state,data){
      state.cartProducts=data
    },
    categoryFilter(state,category){
      if(category==="All"){
        state.showProducts=state.products
      }else{
        state.showProducts=state.products.filter((item:any)=>{
          return item.category===category
        })
      }
    }
  },
  actions: {
    getProducts(mutation){
      return axios.get('/api/products').then((res)=>{
        mutation.commit('fillProducts',res.data)
      })
    },
    addProducts(){
      return axios.post('/api/orders',{
        content:this.state.orderProducts
      })
    },
    getCart(mutation){
      return axios.get('/api/orders').then((res)=>{
        mutation.commit('fillCart',res.data)
      })
    },
    deleteProducts(mutation,id){
      return axios.delete(`/api/orders/${id}`).then(()=>{
        this.dispatch('getCart')
      })
    }
  },
  modules: {
    order
  },
})
