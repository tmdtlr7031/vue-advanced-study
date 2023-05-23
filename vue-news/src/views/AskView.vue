<template>
  <div>
    <div v-for="item in this.ask" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
import { fetcAskList } from '../api/index'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetcAskList()
      .then(response => this.ask = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>