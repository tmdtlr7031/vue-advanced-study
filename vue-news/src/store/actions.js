import { fetchNewsList, fetcJobsList, fetcAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index'

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //             .then(response => {
    //                 context.commit('SET_NEWS', response.data);
    //                 return response;
    //             })
    //             .catch(error => console.log(error));
    // },
    // async
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;    
        } catch (error) {
            console.log(error);
        }
    },

    // Destructuring 적용
    // https://joshua1988.github.io/es6-online-book/destructuring.html
    FETCH_JOBS({commit}) {
        return fetcJobsList()
                .then(({data}) => {
                    commit('SET_JOBS', data);
                })
                .catch(error => console.log(error));
    },
    // api 호출단에서 try~catch 이용
    async FETCH_ASK({commit}) {
        const response = await fetcAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => commit('SET_USER', data))
            .catch(error => console.log(error));
    },
    FETCH_ITEM({commit}, itemId) {
        fetchItemInfo(itemId)
            .then(({data}) => commit('SET_ITEM', data))
            .catch(error => console.log(error));
    },
    // FETCH_LIST({commit}, pageName) {
    //     return fetchList(pageName)
    //             .then(({data}) => commit('SET_LIST', data))
    //             .catch(error => console.log(error));
    // }

    async FETCH_LIST({commit}, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;    
        } catch (error) {
            console.log(error);
        }
    }
}