<template>
  <div id="product">
    <h1>商品頁</h1>
    <section class="nav-section">
      <nav class="product-nav">
        <li @click="categoryFilter('All')">All</li>
        <li @click="categoryFilter('WaterSports')">WaterSports</li>
        <li @click="categoryFilter('Soccer')">Soccer</li>
        <li @click="categoryFilter('Chess')">Chess</li>
      </nav>
    </section>
    <section class="product-section">
      <p  class="product-list" v-for="item in showProducts" :key="item.id">
        <img :src="require(`../assets/${item.img}.jpg`)">
        商品:{{item.name}}
        價格:{{item.price}}
        商品庫存:{{item.quantity}}
        <button @click="reduceHandler(item)">-</button>
        購買數量:{{item.firstQuantity}}
        <button @click="increaseHandler(item)">+</button>
        <button @click="addHandler(item)">加入購物車</button>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { mapState,mapMutations,mapActions } from 'vuex'
import {Product} from '../data/entitled'

export default{
  computed:{
    ...mapState([
      //等同於this.$store.state.showProducts
      'showProducts',
      'orderProducts'
    ]),
  },
  methods:{
    ...mapMutations([
      'categoryFilter'
    ]),
    ...mapActions([
      //等同於$store.dispatch('getProducts')
      'getProducts',
      'addProducts',
      'cartProducts',
      'getCart'
    ]),
    reduceHandler(item:Product){
      if(item.firstQuantity>1){
        item.firstQuantity--
      }
    },
    increaseHandler(item:Product){
      if(item.firstQuantity<item.quantity){
        item.firstQuantity++
      }
    },
    addHandler(item:Product){
      this.$store.state.orderProducts=item
      this.addProducts()
      alert("加入購物車成功")
    }
  },
  mounted(){
    this.$nextTick(async()=>{
      await this.getProducts()
      this.categoryFilter('All')
    })
  }
}
</script>