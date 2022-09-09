import axios from './index';

// 校验登陆相关的内容：登陆，检查是否登陆，获取用户基本信息，登出

export function handleLogin(account, password) {
	return axios.post('/user/login', {
		account,
		password
	}).then(result => {
		if (parseInt(result.code) === 0) {
			return result.power;
		}
		return Promise.reject(result.codeText);
	});
}

export function checkLogin() {
	return axios.get('/user/login').then(result => {
		if (parseInt(result.code) === 0) {
			return true;
		}
		return Promise.reject(false);
	});
}

export function queryBaseInfo(userId) {
	let obj = {};
	userId ? obj.userId = userId : null;
	return axios.get('/user/info', {
		params: obj
	}).then(result => {
		if (parseInt(result.code) === 0) {
			return result.data;
		}
		return Promise.reject(result.codeText);
	});
}

export function signout() {
	return axios.get('/user/signout').then(result => {
		if (parseInt(result.code) === 0) {
			return true;
		}
		return Promise.reject(result.codeText);
	});
}