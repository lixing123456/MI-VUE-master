const express = require('express'),
	route = express.Router();

const {
	success,
} = require('../utils/tools');

const {
	writeFile
} = require('../utils/promiseFS');


//=>获取json信息
route.get('/list', (req, res) => {
    let data = req.$shangpinliebiaoDATA;

	data = data.map(item => {
		return {
            id: item.id,
            name:item.name,
            desc:item.desc,
            price:item.price,
            gongneng:item.gongneng,
            src:item.src,
            state:item.state,
		}
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