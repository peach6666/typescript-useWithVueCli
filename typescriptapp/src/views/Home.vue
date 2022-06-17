<template>
  <div>
    <front-page/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontPage from '../components/frontPage.vue';

//掛載組件，vue-property-decorator的美化寫法
@Component({
  components: {
    FrontPage
  },
})
export default class Home extends Vue {}
</script>
