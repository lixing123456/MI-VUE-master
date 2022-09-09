const express = require('express'),
	route = express.Router();

const {
	success,
} = require('../utils/tools');

// const {
// 	writeFile
// } = require('../utils/promiseFS');


//=>获取json信息
route.get('/sousuo', (req, res) => {
    let data = req.$sousuoshangpinDATA;
    let {type} = req.query;
    console.log(type);
    data = data.filter(item => {
        return type.includes(item.type);
    });
    console.log(data.length);
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

module.exports = route;