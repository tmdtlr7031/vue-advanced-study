# vue-advanced-study

## Vue Lifecycle hook
- 데이터 요청은 ```created```나 ```beforeMount``` 에서 한다.
    - mounted가 되고 나서 데이터 요청을 하게 되면, 뷰의 reactivity 특성에 의해 화면이 다시 그려지게 된다.
    - 하지만 데이터 요청 + DOM에 접근이 필요하면 ```mounted``` 사용
    - https://www.inflearn.com/questions/404907
- 참고 : https://vuejs.org/guide/extras/reactivity-in-depth.html

## Vue Destructureing
- https://joshua1988.github.io/es6-online-book/destructuring.html

## 내용에 태그있는경우 escapeXml 효과
- ```javascript
    <div v-html="fetchedItem.content"></div>
  ```


## Vue.js API
- https://vuejs.org/api/#v-html