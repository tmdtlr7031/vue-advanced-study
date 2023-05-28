# vue-advanced-study

## 공통 컴포넌트 구현
- 컴포넌트마다 다른 내용은 어떻게 분기하지?!
- ```ListItem.vue``` 참고
```javascript
  // 가상의 html 태그 이용
  // v-if 조건에 만족하면 해당 태그 내용, 아니면 v-else 태그 내용 노출
  <template v-if="item.domain">
      <a :href="item.url">{{item.title}}</a>
  </template>
  <template v-else>
      <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
  </template>

  // 위와 같은 의미
  <router-link :to="`/user/${item.user}`" class="link-text" v-if="item.user">{{item.user}}</router-link>
  <a :href="item.url" v-else>{{item.domain}}</a> 
```