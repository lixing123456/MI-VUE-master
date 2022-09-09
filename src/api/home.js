import axios from './index';

// 校验登陆相关的内容：登陆，检查是否登陆，获取用户基本信息，登出

export function queryPhoneList() {
	return axios.get('/shangpinliebiao/list').then(result => {
		if (parseInt(result.code) === 0) {
			return result.data;
		}
		return Promise.reject(result.codeText);
	});
}