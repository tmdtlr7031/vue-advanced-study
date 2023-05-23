<template>
  <div>
    <div v-for="job in this.jobs" :key="job.id">{{job.title}}</div>
  </div>
</template>

<script>
import { fetcJobsList } from '../api/index'

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetcJobsList()
      .then(response => this.jobs = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>