import { fetchNewsList, fetcJobsList, fetcAskList, fetchUserInfo, fetchItemInfo } from '../api/index'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(error => console.log(error));
    },
    // Destructuring 적용
    // https://joshua1988.github.io/es6-online-book/destructuring.html
    FETCH_JOBS({commit}) {
        fetcJobsList()
            .then(({data}) => commit('SET_JOBS', data))
            .catch(error => console.log(error))
    },
    FETCH_ASK({commit}) {
        fetcAskList()
            .then(({data}) => commit('SET_ASK', data))
            .catch(error => console.log(error))
    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => commit('SET_USER', data))
            .catch(error => console.log(error))
    },
    FETCH_ITEM({commit}, itemId) {
        fetchItemInfo(itemId)
            .then(({data}) => commit('SET_ITEM', data))
            .catch(error => console.log(error))
    }
}