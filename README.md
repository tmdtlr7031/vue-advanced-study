# vue-advanced-study

## 공통 컴포넌트 구현
- store vs props 
  - store
    - ```javascript
        // # 1 store
        // UserView.vue
        <template>
          <div>
            <user-profile></user-profile>
          </div>
        </template>

        <script>
        import UserProfile from '../components/UserProfile.vue';

        export default {
          components: { 
            UserProfile 
          },
          created() {
            const userName = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', userName);
          }

        }
        </script>

        // UserProfile.vue
        computed: {
            userInfo() {
                return this.$store.state.user;
            }
        },
      ```
  - props
    - ```javascript
        // # 2 props
        // UserView.vue
        <template>
          <div>
            <user-profile :info="userInfo"></user-profile>
          </div>
        </template>

        <script>
        import UserProfile from '../components/UserProfile.vue';

        export default {
          components: { 
            UserProfile 
          },
          computed: {
            userInfo() {
              return this.$store.state.user;
            }
          },
          created() {
            const userName = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', userName);
          }

        }
        </script>

        // UserProfile.vue
        props: {
          info: Object // info 타입지정
        },
      ```
