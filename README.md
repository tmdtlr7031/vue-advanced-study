# vue-advanced-study

## 데이터 호출 시점
- 1. 컴포넌트 라이프 사이클 훅
    - created : 컴포넌트가 생성 되자마자 호출되는 로직

- 2. 라우터 네비게이션 가드
    - 특정 URL로 접근하기 전의 동작을 정의하는 속성 / 함수
    - 라이프 사이클 훅 보다 먼저 호출됨
- 데이터를 받아오는 작업을 예로 들면 
    - 라우터 네비게이션 가드는 데이터를 미리 받고 페이지 이동(컴포넌트 생성)
    - 컴포넌트 라이프 사이클 훅은 페이지 이동(컴포넌트 생성) 


### 라우터 네비게이션 가드
- beforeEnter 등 여러 가지 있음
```javascript
    beforeEnter: (to, from, next) => {
        console.log('to', to);      // 이동할 URL의 라우팅 정보
        console.log('from', from);  // 현재 URL의 라우팅 정보
        console.log('next', next);  // to로 이동하기 위한 함수
        next(); // 호출하지 않으면 이동하지 않음

        // if (to.matched) 같이 분기문에 따라 next(); 호출 여부 로직 추가 가능
    }
```
