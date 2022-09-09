import * as types from './store-types';
import {
	queryPhoneList
} from '../api/home';

export default {
	namespaced: true,
	state: {
        PhoneList:null
	},
	mutations: {
		[types.PHONE](state, payload) {
            state.PhoneList = payload
		}
	},
	actions: {
		[types.PHONE](context) {
			queryPhoneList().then(result => {
				context.commit(types.PHONE, {
					list:result
				});
			}).catch(() => {});
		}
	}
};