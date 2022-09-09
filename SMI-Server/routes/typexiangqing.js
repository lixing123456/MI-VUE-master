const express = require('express'),
    route = express.Router();

const {
    success,
    getTypeInfo
} = require('../utils/tools');

const {
    writeFile
} = require('../utils/promiseFS');


//=>获取json信息
route.get('/list', (req, res) => {
    let data = req.$typeDATA;
    data = data.map(item => {
        return {
            item
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

module.exports = route;