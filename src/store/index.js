import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  keepAlive: []
}

const mutations = {
  'SET_KEEP_ALIVE' (state, data) {
		const index = state.keepAlive.findIndex((v) => { return v == data.routeName })
		if (data.flag) {
			if (index == -1) {
				state.keepAlive.push(data.routeName)
			}
		} else {
			if (index > -1) {
				state.keepAlive.splice(index, 1)
			}
		}
	}
}

const getters = {
  GET_KEEP_ALIVE: state => {
    return state.keepAlive
  }
}



export default new Vuex.Store({
  state,
  mutations,
  getters
})
