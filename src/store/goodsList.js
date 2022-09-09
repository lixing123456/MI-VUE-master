import * as types from './store-types';
import {
	queryCustomList
} from '../api/custom';

export default {
	namespaced: true,
	state: {
		myList: null,
		allList: null
	},
	mutations: {
		[types.GOODS_QUERY_LIST](state, payload) {
			//=>payload={result:{},lx:my|all}
			let {
				lx = 'my',
					result = {}
			} = payload;
			lx === 'my' ? state.myList = result : state.allList = result;
		}
	},
	actions: {
		[types.CUSTOM_QUERY_LIST](context, lx = 'my') {
			queryCustomList({
				lx
			}).then(result => {
				context.commit(types.GOODS_QUERY_LIST, {
					result,
					lx
				});
			}).catch(() => {});
		}
	}
};