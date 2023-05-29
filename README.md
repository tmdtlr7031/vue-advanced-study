# vue-advanced-study

## 이벤트 버스
- 빈 이벤트 객체를 만들어서, 그 객체를 통해 컴포넌트간 데이터 전달하는 것
- ```$emit```으로 요청하고 ```$on```으로 받는다. 다 썼으면 ```$off```

## Vue 3에서의 이벤트 버스
- Vue 3 에서는 이벤트 버스를 지원하지 않는다.
    - ```Vuex```로 대체하기
    - ```mitt``` 라이브러리 설치하기 (npm i mitt)

## 궁금한 거 정리
- $emit 네이밍
    - ```$emit('이벤트이름:대상')``` 이런 식으로 작명하지만 ```$emit('say-hi')```, ```$emit('sayHi')``` 해도 무방
    - https://www.inflearn.com/questions/345396

- 굳이 이벤트 버스를 쓰는 이유?
    - 컴포넌트 이외의 모듈(뷰엑스, 라우터 등)에서도 컴포넌트를 호출하고 싶을 때는 props, emit으로 하시기 어려울 것 -> 나중에 경험해봐야 알 듯..?
    - https://www.inflearn.com/questions/131093

- ```beforeDestroy```에서 off 선언하는 이유?
    - beforeDestroy는 app이 완전히 죽을 때 (ex. 앱종료, 브라우저 닫기 등) 호출되는 줄 알았는데 SPA에서는 router-view 태그만 변경되기 때문에 의미없지 않나 샆었다.
    > 질문 출처 : https://www.inflearn.com/questions/363829
    - 하지만 찾아보니 router-view가 변경될 때 -> 다른 컴포넌트 내용으로 변경될 때 호출이 된다. 따라서 이동하기 전 off 해주는게 맞음
    > 참고 : https://velog.io/@wnsguddl789/3-Vues-LifeCycle

- ```$store.dispatch()```는 기본적으로 Promise를 반환한다.
- 비동기 요청 강의 내용 수정
    - ```javascript
        // NewsView.vue
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_NEWS') // 의도한 순서1
                .then(()=> { // 의도한 순서4 (return 받은 객체를 사용할 경우 ()안에 변수 선언 필요)
                bus.$emit('end:spinner');
                })
                .catch((error) => console.log(error));  
        }

        // actions.js
        FETCH_NEWS(context) {
            return fetchNewsList() // 의도한 순서2, return이 없으면 dispatch가 Promise를 반환하기 때문에 실행은 되지만, 순서성이 보장되지 않아 정상 동작 하지 않는다.
                    .then(response => {
                        context.commit('SET_NEWS', response.data);
                        return response; // 의도한 순서3, NewsView.vue에서 then((data))를 이용해 응답값을 이용하려는 경우, 해당 return 이 없으면 undefined가 노출된다
                    })
                    .catch(error => console.log(error));
        },
      ```
- Vue 3에서는 ```rander()```가 인자를 받지 않음
    - vue 에서 h 를 불러와서 사용
        - ```import { h } from 'vue'```
        - h는 컴포넌트나 엘리먼트를 그려주는 API
        - https://www.inflearn.com/questions/575820
    
## 하이 오더 컴포넌트
- 컴포넌트의 로직을 재사용하기 위한 기술
- 그냥 공통의 vue 컴포넌트 만드는 것과 무슨 차이야?
    - 생성하는 시점에 원하는 값들을 파라미터로 넘겨서 컴포넌트의 내부 구조를 정의할 수 있는 장점
    - https://www.inflearn.com/questions/345411
- "하이 오더 컴포넌트가 적용된 앱 구조 설명 및 흐름 정리" 이후에 불필요한 파일, 소스를 제거할 수 있지만 그냥 냅두고 진행
- 단점 : 컴포넌트 깊이가 깊어지고 통신에 불편함이 발생..

## Mixins
- 여러 컴포넌트 간에 공통으로 사용하는 로직, 기능들을 재사용하는 방법으로 data, methods, created 등과 같은 컴포넌트 옵션을 정의할 수 있다.


## Vue.js 라이프사이클
- https://beomy.tistory.com/47

## 참고
- https://joshua1988.github.io/web-development/vuejs/vue3-as-default/ : 22년7월부 Vue 3 기본 버전됨
