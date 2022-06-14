<template>
    <div>
        <h1>購物車</h1>
        <p v-for="item in cartProducts" :key="item.id">
        <img :src="require(`../assets/${item.content.img}.jpg`)">
        商品:{{item.content.name}}
        商品價格:{{item.content.price}}元
        購買數量:{{item.content.firstQuantity}}
        總價:{{item.content.price*item.content.firstQuantity}}元
        <button @click="deleteProducts(item.id)">刪除商品</button>
        </p>
        <button>確認購買</button>
    </div>
</template>

<script lang="ts">
import { mapState,mapGetters,mapMutations,mapActions } from "vuex"
import {Product} from '../data/entitled'

export default{
    computed:{
      ...mapState([
        'cartProducts'
      ])
    },
    methods:{
      ...mapActions([
          'getCart',
          'deleteProducts'
      ]),
      testTs(prop:string):void{
        alert(prop)
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.getCart()
      })
    }
}
</script>