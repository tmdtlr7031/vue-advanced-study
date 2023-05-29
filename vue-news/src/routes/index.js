import Vue from 'vue';
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '@/views/CreateListView';

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
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
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
