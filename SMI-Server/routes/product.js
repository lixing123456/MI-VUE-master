const express = require('express'),
	route = express.Router();

const {
	success,
	getProductInfo
} = require('../utils/tools');

const {
	writeFile,
} = require('../utils/promiseFS');


//=>获取产品列表
route.get('/list', (req, res) => {
	let data = req.$productDATA;
	data = data.map(item => {
		return {
			id: item.id,
			name: item.name,
			desc: item.desc,
			state: item.state,
			price: item.price,
			gongneng: item.gongneng,
			src: item.src,
			state: item.state,
			index: item.index
		}
	});
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>修改产品信息
route.post('/update', (req, res) => {
	req.body = req.body || {};
	let $productDATA = req.$productDATA,
		id = parseFloat(req.body.id),
		flag = false;
	delete req.body.id;
	$productDATA = $productDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(id)) {
			flag = true;
			return {
				...item,
				...req.body,
			};
		}
		return item;
	});
	if (!flag) {
		res.send(success(false));
		return;
	}
	writeFile('./json/productList.json', $productDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//将已经付钱的从购物车删除
route.post('/change', (req, res) => {
	req.body = req.body || {};
	var $productDATA = req.$productDATA,
	$productDATA = $productDATA.map(item => {
		if (item.collectState !== 0&&item.collectState !== "0") {
			item.collectState = 0;
			item.payState=1;
		}
		return item
	});
	// if (!flag) {
	// 	res.send(success(false));
	// 	return;
	// }
	writeFile('./json/productList.json', $productDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
})





//清空购物车和已经付钱的商品
route.post('/clear', (req, res) => {
	req.body = req.body || {};
	var $productDATA = req.$productDATA,
		// id = parseFloat(req.body.id),
		// flag = false;
		$productDATA = $productDATA.map(item => {
			if (item.collectState !== 0) {
				item.collectState = 0;
			}
			if (item.payState !== 0) {
				item.payState = 0;
			}
			return item
		});
	// if (!flag) {
	// 	res.send(success(false));
	// 	return;
	// }
	writeFile('./json/productList.json', $productDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
})

//删除商品
route.post('/delete', (req, res) => {
	req.body = req.body || {};
	let $productDATA = req.$productDATA,
		id = parseFloat(req.body.id),
		flag = false;
	$productDATA = $productDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(id)) {
			flag = true;
			return {
				...item,
				state: 1
			};
		}
		return item
	});
	if (!flag) {
		res.send(success(false));
		return;
	}
	writeFile('./json/productList.json', $productDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
})





//=>获取购物车列表
route.get('/selectList', (req, res) => {
	let data = req.$productDATA;
	data = data.filter(item => {
		console.log(item.collectState);
		if (parseFloat(item.collectState) > 0) {
			return {
				id: item.id,
				name: item.name,
				desc: item.desc,
				price: item.price,
				collectState: item.collectState,
				state: item.state
			}
		}
	});
	console.log(data);
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//获取已经付钱的商品列表
route.get('/payList', (req, res) => {
	let data = req.$productDATA;
	data = data.filter(item => {
		if (parseFloat(item.payState) > 0) {
			return {
				id: item.id,
				name: item.name,
				desc: item.desc,
				price: item.price,
				payState: item.payState,
				state: item.state
			}
		}
	});
	console.log(data);
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});
//=>获取产品信息
route.get('/info', (req, res) => {
	let {
		productId = 0
	} = req.query;
	let data = getProductInfo(productId, req);
	// if ('name' in data.data) {
	res.send(success(true, {
		data: {
			id: data.id,
			name: data.name,
			desc: data.desc,
			price: data.price,
			collectState: data.collectState,
			state: data.state
		}
	}));
	return;
	// }
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>增加新商品
route.post('/add', (req, res) => {
	let $productDATA = req.$productDATA,
		commodityDATA = null;
	commodityDATA = Object.assign({
		id: $productDATA.length === 0 ? 1 : (parseFloat($productDATA[$productDATA.length - 1]['id']) + 1),
		name: '',
		desc: '',
		price: '',
		gongneng: '',
		src: '',
		collectState: 0,
		payState: 0,
		state: 0,
		isSelect: false,
		index: $productDATA.length === 0 ? 1 : (parseFloat($productDATA[$productDATA.length - 1]['index']) + 1),
	}, (req.body || {}));
	$productDATA.push(commodityDATA);

	writeFile('./json/productList.json', $productDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});
//删除商品
// route.all('/delete', (req, res) => {
// 	req.body = req.body || {};
// 	let $productDATA = req.$productDATA,
// 		id = parseFloat(req.body.id),
// 		flag = false;
// 	delete req.body.id;
// 	$productDATA = $productDATA.map(item => {
// 		if (parseFloat(item.id) === parseFloat(id)) {
// 			flag = true;
// 			return {
// 				...item,
// 				state:1
// 			};
// 		}
// 		return item;
// 	});
// 	if (!flag) {
// 		res.send(success(false));
// 		return;
// 	}
// 	writeFile('./json/productList.json', $productDATA).then(() => {
// 		res.send(success(true));
// 	}).catch(() => {
// 		res.send(success(false));
// 	});
// });



module.exports = route;