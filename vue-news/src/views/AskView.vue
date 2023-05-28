<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.id">
      <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  computed: {
    // # 3-1
    ...mapGetters(['fetchedAsk'])

    // # 3-2 (해당 컴포넌트의 변수명이 다른 경우)
    // ...mapGetters({
    //   ask : 'fetchedAsk' // 컴포넌트사용변수명 : store getters 명
    // })

    // # 2
    // ...mapState({
    //   ask : state => state.ask
    // })

    // # 1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>