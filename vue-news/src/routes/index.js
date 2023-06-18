import Vue from 'vue';
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
// import createListView from '@/views/CreateListView';
import bus from '../utils/bus'
import {store} from '../store/index.js'

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
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(()=> {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => console.log(error));
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(()=> {
                        // bus.$emit('end:spinner'); // mounted에서 처리함
                        next();
                    })
                    .catch((error) => console.log(error));
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(()=> next())
                    .catch((error) => console.log(error));
            }
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
