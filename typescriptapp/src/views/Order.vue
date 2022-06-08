<template>
    <div>
        <h1>購物車</h1>
        <p v-for="item in cartProducts" :key="item.id">
        <img :src="require(`../assets/${item.img}.jpg`)">
        商品名稱:{{item.name}}
        商品價格:{{item.price}}
        庫存:{{item.quantity}}
        </p>
        {{cartProducts}}
        {{testThing}}
    </div>
</template>

<script lang="ts">
import { mapState,mapGetters,mapMutations,mapActions } from "vuex"
import {Product} from '../data/entitled'

export default{
    data(){
        return{
            testThing:null
        }
    },
    computed:{
      ...mapState([
        'cartProducts'
      ])
    },
    methods:{
      ...mapActions([
          'getCart'
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