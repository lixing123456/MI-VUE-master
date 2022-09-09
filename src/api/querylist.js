import axios from './index';
// 获取购物车的商品列表

export function queryCartList(options) {
	let params = {
		// type: ''
	};
	params = Object.assign(params, options);
	return axios.get('/cartlist', {
		params
	}).then(result => {
		if (parseInt(result.code) === 0) {
			return result;
		}
		return Promise.reject(result.codeText);
	});
}