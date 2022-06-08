<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <test/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import test from '../components/test.vue'

//掛載組件，vue-property-decorator的美化寫法
@Component({
  components: {
    test
  },
})
export default class Home extends Vue {}
</script>
