<template>
    <div id="order">
        <h1>購物車</h1>
        <p v-for="item in cartProducts" :key="item.id">
        <img :src="require(`../assets/${item.content.img}.jpg`)">
        商品:{{item.content.name}}
        商品價格:{{item.content.price}}元
        購買數量:{{item.content.firstQuantity}}
        總價:{{(item.content.price*item.content.firstQuantity).toFixed(2)}}元
        <button  class="delete-btn" @click="deleteProducts(item.id)">
          <img src="../assets/delete.svg">
        </button>
        </p>
        <button>確認購買</button>
    </div>
</template>

<script lang="ts">
import { mapState,mapActions } from "vuex"

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
      ])
    },
    mounted(){
      this.$nextTick(()=>{
        this.getCart()
      })
    }
}
</script>