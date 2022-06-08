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
  },
  actions: {
    getProducts(mutation){
      return axios.get('/api/products').then((res)=>{
        mutation.commit('fillProducts',res.data)
      })
    },
    async addProducts({dispatch}){
      await dispatch('getCart')
      await this.state.cartProducts.forEach((element:any) => {
        console.log(element)
        if(this.state.orderProducts.name===element.name){
          element.firstQuantity+=this.state.orderProducts.firstQuantity
        }else{
          return axios.post('/api/orders',{
            name:this.state.orderProducts.name,
            price:this.state.orderProducts.price,
            img:this.state.orderProducts.img,
            quantity:this.state.orderProducts.quantity,
            firstQuantity:this.state.orderProducts.firstQuantity
          })
        }
      })
    },
    getCart(mutation){
      return axios.get('/api/orders').then((res)=>{
        mutation.commit('fillCart',res.data)
      })
    }
  },
  modules: {
    order
  },
})
