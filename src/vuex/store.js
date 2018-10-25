import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const moduleA={
    state,mutations,getters,actions
}

const state={
	count:3
};

const mutations={
	add(state,n){
		state.count+=n;
	},
	reduce(state){
		state.count--;
	},

}

const actions ={
    addAction(context){
        context.commit('add',10);
        setTimeOut(()=>{context.commit(reduce)},3000);
		console.log('我比reduce提前执行');
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

const getters={
	count:function(state){
		return state.count+=100;
	}
}

export default new Vuex.Store({
	// state,
	// mutations,
	// getters
	modules:{a:moduleA}
})