import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import Type from '../pages/Type.vue';
import Myself from '../pages/Myself.vue';
import Zhuce from '../pages/zhuce.vue';
import Login from '../pages/Login.vue';
import Recom from '../pages/Home/Recom.vue';
import Phone from '../pages/Home/Phone.vue';
import Setting from '../pages/Setting.vue';
import Kouqianghuli from '../pages/fenlei/kouqianghuli.vue';
import Meironghufu from '../pages/fenlei/meironghufu.vue';
import Chaoliuxinxie from '../pages/fenlei/chaoliuxinxie.vue';
import Yundongyongpin from '../pages/fenlei/yundongyongpin.vue';
import Xiajiquwen from '../pages/fenlei/xiajiquwen.vue';
import Xiuxianyinpin from '../pages/fenlei/xiuxianyinpin.vue';
import Xiyixifa from '../pages/fenlei/xiyixifa.vue';
import Yiwuhuli from '../pages/fenlei/yiwuhuli.vue';
import Youxianshipin from '../pages/fenlei/youxianshipin.vue';
import guanlizhe from '../guanlizhe.vue';
import Beijing from '../beijing.vue'

import Search from '../pages/Search.vue';
import SearchReault from '../pages/Search/SearchResult.vue';
// import SearchBefore from '../pages/Search/SearchBefore.Vue';
import Searchmain from '../pages/Search/Searchmain.vue';

import Paylist from '../pages/Cart/ShopCart-payList.vue';
import Shopcart from '../pages/Shopcart.vue';
import Successpay from '../pages/Cart/Successpay.vue';
import Surepay from '../pages/Cart/Surepay.vue';
import SurepayFa from '../pages/Cart/SurepayFa.vue';

import OrderList from '../pages/OrderList.vue';
import ProductDetail from '../pages/ProductDetail.vue';




Vue.use(VueRouter);
const router = new VueRouter({
	mode: "hash",
	routes: [{
			path: '/',
			redirect: '/beijing'
		}, {
			path: '/guanlizhe',
			name: 'guanlizhe',
			component: guanlizhe
		},
		{
			path: '/beijing',
			name: 'beijing',
			component: Beijing
		},
		{
			path: '/homepage',
			name: 'homepage',
			component: Homepage,
			children: [{
				path: '',
				redirect: {
					path: '/homepage/recom',
				}
			}, {
				path: 'recom',
				name: 'Recom',
				component: Recom
			}, {
				path: 'phone',
				name: 'Phone',
				component: Phone
			}]
		},
		{
			path: '/type',
			name: 'type',
			component: Type,
			children: [{
					path: '/',
					redirect: 'yundongyongpin'
				},
				{
					path: 'kouqianghuli',
					name: 'kouqianghuli',
					component: Kouqianghuli
				}, {
					path: 'meironghufu',
					name: 'meironghufu',
					component: Meironghufu
				}, {
					path: 'chaoliuxinxie',
					name: 'chaoliuxinxie',
					component: Chaoliuxinxie
				}, {
					path: 'yundongyongpin',
					name: 'yundongyongpin',
					component: Yundongyongpin
				}, {
					path: 'xiajiquwen',
					name: 'xiajiquwen',
					component: Xiajiquwen
				}, {
					path: 'xiuxianyinpin',
					name: 'xiuxianyinpin',
					component: Xiuxianyinpin
				}, {
					path: 'xiyixifa',
					name: 'xiyixifa',
					component: Xiyixifa
				}, {
					path: 'yiwuhuli',
					name: 'yiwuhuli',
					component: Yiwuhuli
				}, {
					path: 'youxianshipin',
					name: 'youxianshipin',
					component: Youxianshipin
				},
			]
		}, {
			path: '/shopcart',
			name: 'shopcart',
			component: Shopcart,
		}, {
			path: '/paylist',
			name: 'paylist',
			component: Paylist,
		}, {
			path: '/surepayfa',
			name: 'surepayfa',
			component: SurepayFa,
			children: [{
				path: 'surepay',
				name: 'surepay',
				component: Surepay,
			}, {
				path: 'successpay',
				name: 'successpay',
				component: Successpay,
			}]
		}, {
			path: '/myself',
			name: 'myself',
			component: Myself,
		},{
			path: '/zhuce',
			name: 'zhuce',
			component: Zhuce,
		}, {
			path: '/login',
			name: 'login',
			component: Login,
		}, {
			path: '/setting',
			name: 'setting',
			component: Setting,
		}, {
			path: '/search',
			name: 'search',
			component: Search,
			children: [{
				path: 'searchmain',
				name: 'searchmain',
				component: Searchmain
			}, {
				path: 'searchreault/:productId',
				name: 'searchreault',
				component: SearchReault
			}]
		},
		{
			path: '/orderList/:type',
			name: 'orderList',
			component: OrderList,
		}, {
			path: '/productDetail/:productId',
			name: 'productDetail',
			component: ProductDetail,
		}, {
			path: '*',
			redirect: '/homepage'
		}
	]
});

export default router;