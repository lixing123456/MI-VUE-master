module.exports = {
    //=>基于PAGES配置多页面效果
    pages: {
        login: {
            entry: 'src/Login.js',
            template: 'public/login.html'
        },
        index: {
            entry: 'src/App.js',
            template: 'public/index.html'
        }
    }
};