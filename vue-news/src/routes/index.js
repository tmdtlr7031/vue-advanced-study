import Vue from 'vue';
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // localhost:8080/#/news 처럼 앞에 # 제거
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // url 주소
            path: '/news',
            name: 'news',
            component: NewsView, // url 주소로 왔을 때 표시될 컴포넌트
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id', // 동적라우트
            component: UserView,
        }
    ]
});
