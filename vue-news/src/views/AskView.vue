<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="points">
          {{item.points}}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by {{item.user}}
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import {mapState} from 'vuex'
// import {mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  }

  // computed: {
  //   // # 3-1
  //   ...mapGetters(['fetchedAsk'])

  //   // # 3-2 (해당 컴포넌트의 변수명이 다른 경우)
  //   // ...mapGetters({
  //   //   ask : 'fetchedAsk' // 컴포넌트사용변수명 : store getters 명
  //   // })

  //   // # 2
  //   // ...mapState({
  //   //   ask : state => state.ask
  //   // })

  //   // # 1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>