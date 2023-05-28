# vue-advanced-study

## Vue Lifecycle hook
- 데이터 요청은 ```created```나 ```beforeMount``` 에서 한다.
    - mounted가 되고 나서 데이터 요청을 하게 되면, 뷰의 reactivity 특성에 의해 화면이 다시 그려지게 된다.
    - 하지만 데이터 요청 + DOM에 접근이 필요하면 ```mounted``` 사용
    - https://www.inflearn.com/questions/404907
- 참고 : https://vuejs.org/guide/extras/reactivity-in-depth.html

## Vue Destructureing
- https://joshua1988.github.io/es6-online-book/destructuring.html

## computed 속성에서 끌어쓰는 방법
```javascript

    computed: {
    // # 3-1 헬퍼 함수 이용 (mapGetters) ::  getters: {}에 정의한 명칭과 해당 컴포넌트에서 사용하는 명칭이 같은 경우
    ...mapGetters(['fetchedAsk'])

    // # 3-2 헬퍼 함수 이용 (mapGetters) :: getters: {}에 정의한 명칭과 해당 컴포넌트에서 사용하는 명칭이 같은 다른 경우
    ...mapGetters({
      ask : 'fetchedAsk' // 컴포넌트사용변수명 : store getters 명
    })

    // # 2 헬퍼 함수 이용 (mapState)
    ...mapState({
      ask : state => state.ask
    })

    // # 1
    ask() {
      return this.$store.state.ask;
    }
  },
```