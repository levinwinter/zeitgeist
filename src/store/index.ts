import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        forename: '',
        bilingual: false
    },
    mutations: {
        setForename (state, forename) {
            state.forename = forename
        },
        setBilingual (state, bilingual) {
            state.bilingual = bilingual
        }
    },
    actions: {
    },
    modules: {
    }
})
