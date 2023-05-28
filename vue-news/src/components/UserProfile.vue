<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <div>{{info.id}}</div> -->
            <slot name="username"></slot>

            <!-- <div class="time">{{info.created}}</div> -->
            <div class="time">
                <slot name="time"></slot>
            </div>

            <slot name="karam"></slot>
        </div>
    </div>
</template>

<script>
export default {
    // 아래주석 해제하면 computed 주석
    props: {
        info: Object
    },
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>