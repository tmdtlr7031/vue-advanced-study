<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{item.points}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by {{item.user}}
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .news-title {
    margin: 0;
  }
  .link-text {
    color: #828282;
  }
</style>