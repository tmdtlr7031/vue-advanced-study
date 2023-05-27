<template>
  <div>
    <p v-for="job in $store.state.jobs" :key="job.id">
      <a :href="job.url">{{job.title}}</a>
      <small>{{job.domain}}, {{job.time_ago}}</small>
    </p>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>