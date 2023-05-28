<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  /* a태그 아래 밑줄 제거 */
  a {
    color: #34495e;
    text-decoration: none;
  }

  /* 툴바쪽 선택된 항목 밑줄 */
  a.router-link-exact-active {
    text-decoration: underline;
  }

  a:hover {
    color: #42b883;
    text-decoration: underline;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
