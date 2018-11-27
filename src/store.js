import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: 'test',
            email: 'test@test.com',
            token: '1124d12',
            avatar_url: 'https://via.placeholder.com/50x50?text=Avatar',
        },
        sites: [
            {
                id: 1,
                url: 'https://vuejs.org/',
                meta: {
                    title: 'Vue JS',
                    desc: 'test desc',
                },
                pageStatus: 87,
            },
            {
                id: 2,
                url: 'https://reactjs.org/',
                meta: {
                    title: 'React JS',
                    desc: 'test desc',
                },
                pageStatus: 84,
            },
        ],
        pages: [
            {
                id: 1,
                siteId: 1,
                url: 'https://vuejs.org',
            },
            {
                id: 2,
                siteId: 1,
                url: 'https://vuejs.org/v2/guide/',
            },
            {
                id: 3,
                siteId: 2,
                url: 'https://reactjs.org/',
            },
        ],
    },
    getters: {
        user: state => state.user,
        sites: state => state.sites,
        pages: siteId => (state) => {
            const pagesList = state.pages
                .filter(page => page.siteId === siteId);

            return pagesList;
        },
    },
    mutations: {

    },
    actions: {

    },
});
