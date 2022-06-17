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
    products:[] as Product[],
    showProducts:[] as Product[],
    orderProducts:[] as Product[],
    cartProducts:[] as Product[]
  },
  mutations: {
    fillProducts(state,data:Product[]){
      state.products=data
    },
    fillCart(state,data:Product[]){
      state.cartProducts=data
    },
    categoryFilter(state,category:string){
      if(category==="All"){
        state.showProducts=state.products
      }else{
        state.showProducts=state.products.filter((item:Product)=>{
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
    deleteProducts(mutation,id:number){
      return axios.delete(`/api/orders/${id}`).then(()=>{
        this.dispatch('getCart')
      })
    }
  },
  modules: {
    order
  },
})
