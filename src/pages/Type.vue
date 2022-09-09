<template>
    <div class="type">
        <header class="header">
            <i class="i1" @click="backtoOne()"></i>
            <p class="text">分类</p>
            <router-link class="i2" :to="{path:'/search'}"></router-link>
        </header>
        <!-- 侧边导航 -->
        <div class="ghcontainer">
             <nav class="navDH">
                <ul class="navWrapper">
                    <li :class="{active:flag==0?true:false}" @click="go(0)">
                       <router-link to="/type/yundongyongpin" > <p>运动用品</p></router-link>
                    </li>
                    <li :class="{active:flag==1?true:false}" @click="go(1)">
                        <router-link to="/type/yiwuhuli" > <p>衣物护理</p></router-link>
                    </li>
                    <li :class="{active:flag==2?true:false}" @click="go(2)">
                       <router-link to="/type/xiyixifa" > <p>洗衣洗发</p></router-link>
                    </li>
                    <li :class="{active:flag==3?true:false}" @click="go(3)">
                       <router-link to="/type/kouqianghuli" > <p>口腔护理</p></router-link>
                    </li>
                    <li :class="{active:flag==4?true:false}" @click="go(4)">
                       <router-link to="/type/chaoliuxinxie" > <p>清洁纸品</p></router-link>
                    </li>
                    <li :class="{active:flag==5?true:false}" @click="go(5)">
                       <router-link to="/type/meironghufu" > <p>美容护肤</p></router-link>
                    </li>
                    <li :class="{active:flag==6?true:false}" @click="go(6)">
                         <router-link to="/type/xiajiquwen" > <p>夏季驱蚊</p></router-link>
                    </li>
                    <li :class="{active:flag==7?true:false}" @click="go(7)">
                       <router-link to="/type/xiuxianyinpin" > <p>休闲饮品</p></router-link>
                    </li>
                     <li :class="{active:flag==8?true:false}" @click="go(8)">
                        <router-link to="/type/youxianshipin" > <p>休闲食品</p></router-link>
                    </li>
                </ul>
            </nav>
        </div>

            <!-- 分类详情页 -->
            <div class="typeYM">
                <!-- <div class="YMWrapper" v-for=" (i,index) in phonetvList" :key="index">

                    
                    <div class="phone">
                        
                    </div>
                    <div class="typePhone">
                     
                        <div class="typePhoneBox">
                            <div class="product" :key="item.id" v-for="item in i.item.children"
                                 @click="toProductDetail(item.id)">
                                        <img :src="item.src"/>
                                        <p v-text="item.name"></p>

                            </div>

                        </div>
                    </div>

                </div> -->
                <router-view></router-view>
            </div>
        <!-- </div> -->
   
        
        
    </div>

</template>

<script>
    import axios from '../api/index';
    import router from "../routers/index";
    import { Sidebar, SidebarItem } from 'vant';
    export default {
        components: {},
        data() {
            return {
                flag:0,
                chooseIndex: 0,
                // items: [
                //     {label: "清洁饮品"},
                //     {label: "衣物护理"},
                //     {label: "洗衣洗发"},
                //     {label: "口腔护理"},
                //     {label: "女性护理"},
                //     {label: "美容护肤"},
                //     {label: "夏季驱蚊"},
                //     {label: "休闲饮品"},
                //     {label: "休闲食品"},
         

                // ],
                /* 手机和家电总数据 */
                phonetvList:[],
                /*phonetvList: [
                    {
                        titel: "手机",
                        src:'../assets/classify/香薰.png',
                        children: [{
                            id: 41,
                            src: "../assets/classify/小米CC9 Pro.png",
                            name: "小米CC9 Pro",
                            desc: "1亿像素超清主摄 / 后置全场景五摄像头 / 双闪光双柔光四闪光灯 / 3200万像素超清前置相机 / 10倍混合光学变焦，50倍数字变焦 / 5260mAh大电量 / 标配30W疾速快充 / 小米首款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216 超线性扬声器",
                            price: "3099"
                        }, {
                            id: 42,
                            src: "../assets/classify/Redmi 8.png",
                            name: "Redmi 8",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }, {
                            id: 43,
                            src: "../assets/classify/redmi8A.png",
                            name: "Redmi 8A",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"

                        }, {
                            id: 44,
                            src: "../assets/classify/小米9 Pro 5G.png",
                            name: "小米9 Pro 5G",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }, {
                            id: 45,
                            src: "../assets/classify/小米MIX Alpha.png",
                            name: "小米MIX Alpha",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }, {
                            id: 46,
                            src: "../assets/classify/K20 Pro 尊享版.gif",
                            name: "K20 Pro 尊享版",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }, {
                            id: 47,
                            src: "../assets/classify/Redmi Note 8 Pro.gif",
                            name: "Redmi Note 8 Pro",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }, {
                            id: 48,
                            src: "../assets/classify/Redmi Note 8.gif",
                            name: "Redmi Note 8",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }, {
                            id: 49,
                            src: "../assets/classify/小米CC9美图版.png",
                            name: "小米CC9美图版",
                            desc: "5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22\"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机",
                            price: "799"
                        }]

                    }, {
                        titel: "家电",
                        children: [{
                            id:51,
                            src: "../assets/classify/全面屏电视E55A.jpg",
                            name: "全面屏电视E55A",
                            desc: "全面屏设计 / 4K超高清+HDR / 纤薄机身 / 2GB+8GB大内存 / 64位四核处理器 / 内置小爱同学",
                            price: "1688"
                        }, {
                            id:52,
                            src: "../assets/classify/壁画电视.jpg",
                            name: "壁画电视65英寸",
                            desc: "壁画外观 / 全面屏设计 / 4K HDR精良画质 / 2GB+32GB大内存 / 四核处理器 / 13.9mm纤薄机身 / 支持远场语音 / 内置小爱同学 / 首次安装免费",
                            price: "6999"
                        }, {
                            id:53,
                            src: "../assets/classify/电视4X65英寸.jpg",
                            name: "电视4X65英寸",
                            desc: "人工智能语音 / 4K HDR超高清画质 / 超窄边 / 2GB+8GB大内存 / 64位四核处理器 / 内置小爱同学",
                            price: "2499"
                        }, {
                            id:54,
                            src: "../assets/classify/立式空调.png",
                            name: "立式空调",
                            desc: "2匹 / 高效制冷热 / 静音设计 / 立体送风 / 全屋互联 / 智能操控 / 官网购买，免预约安装，签收后服务人员主动联系",
                            price: "2499",
                            state:"0"
                        }, {
                            id:55,
                            src: "../assets/classify/空调C1.jpg",
                            name: "空调C1",
                            desc: "1.5匹 / 自清洁 / 全直流变频节能省电 / 高效制冷热 / 静音设计 / 全屋互联 / 售后无忧 / 官网购买，免预约安装，签收后服务人员主动联系",
                            price: "2199",
                            state:"0"
                        }, {
                            id:56,
                            src: "../assets/classify/烘干一体.jpg",
                            name: "洗烘一体机",
                            desc: "12种洗烘模式 / 除螨洗，羊毛洗，空气洗 / 智能烘干，衣干即停 / 旋钮+按键双控制，操作更便捷 / 一级能效，省水省电",
                            price: "1699",
                            state:"0"
                        }]
                    },{
                        titel: "电脑",
                        children: [{
                            id:61,
                            src: "../assets/classify/游戏本512GB.jpg",
                            name: "游戏本512GB",
                            desc: "第八代酷睿i7六核标压处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 512G高速固态 ／ 双烤不限频不降频／ 冷酷到底的散热系统",
                            price: "7499",
                            state:"0"
                        },
                            {
                                id:62,
                                src: "../assets/classify/Air2019款.jpg",
                                name: "Air2019款",
                                desc: "全高清屏幕 / 长续航全金属 / 超窄边框  / 像杂志一样随身携带 / 哈曼高品质扬声器",
                                price: "3399",
                                state:"0"
                            },
                            {
                                id:63,
                                src: "../assets/classify/笔记本15.6独显.png",
                                name: "笔记本15.6独显",
                                desc: "四核i5处理器 / 全新升级512G高速固态硬盘 / 独立数字键盘 / 全面均衡的国民轻薄本",
                                price: "3799",
                                state:"0"
                            }]
                    }],*/
            }
        },
        created(){
            axios.get('/type/list').then(result => {
                if (parseInt(result.code) === 0) {
                    // this.items = result.data;
                    window.console.log(result,'+++++1111+++++');
                    this.phonetvList = result.data;
                }
            })
        },
        mounted(){
            if(this.$route.query.flag){
                this.flag=this.$route.query.flag;
            }
        },
        methods: {
            back() {
                router.push("/home");
                },
            go(i) {
                this.flag = i;
                console.log(this.flag)
                },
            /* 路由返回到上次进入的前一页 */
            backtoOne() {
                window.history.go(-1);
            },
            /* 页面导航选中样式 */
            handleChange(index) {
                window.console.log(index);
                this.chooseIndex = index;
            },
            /* 点击跳转进详情页*/
            toProductDetail(id) {
                window.console.log(id);
               this.$router.push("productDetail/"+id);

            },
        }
    };
</script>

<style lang='less'>
    .type {
        position: relative;
        width: 7.5rem;
        .header {
            position: fixed;
            z-index: 999;
            display: flex;
            width: 7.5rem;
            height: 1rem;
            background: #f2f2f2;

            .i1 {
                margin: .2rem;
                display: block;
                width: .52rem;
                height: .52rem;
                line-height: .52rem;
                background: url(../assets/classify/i1.png) no-repeat;
                background-size: cover;

            }
            .text {
                margin: .32rem 0;
                color: #666666;
                text-align: center;
                font-size: .36rem;
                width: 5.4rem;
                height: .36rem;
                line-height: .36rem;
            }
            .i2 {
                margin: .2rem;
                width: .62rem;
                height: .62rem;
                line-height: .62rem;
                background: url(../assets/classify/i2.png) no-repeat;
                background-size: cover;
            }
        }
        .navDH {
            width: 1.6rem;
            height: 100%;
            border-right: 1px solid #efefef;

            .navWrapper {
                position: absolute;
                top: 1rem;
                width: 1.8rem;
                height: 100%;

            }
            .navWrapper > li {
                white-space: nowrap;
                overflow: hidden;
                width: 1.56rem;
                height: .92rem;
                line-height: .92rem;
                font-size: .32rem;
                text-align: center;
                color: #3c3c3c;
            }
        }
        .typeYM {
            position: absolute;
            top: 1.3rem;
            left: 1.96rem;
            width: 5.24rem;
            height: 100%;

            .YMWrapper {
                width: 5.24rem;
                img {
                    width: 5.2rem;
                    height: 2.08rem;
                }

                .phone2 {
                    color: #3c3c3c;
                    position: relative;
                    background: #fff;
                    font-size: .28rem;
                    text-align: center;
                    font-weight: 400;
                    margin-top: .2rem;
                    height: .8rem;
                    line-height: .8rem;
                    overflow: hidden;
                    .phoneText2:before,
                    .phoneText2:after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: auto;
                        width: 6.4px;
                        width: .4rem;
                        border-top: 1px solid #e0e0e0;
                        transform: translate3d(-150%, -50%, 0);
                    }
                    .phoneText2:after {
                        left: auto;
                        right: 56px;
                    }
                }
                .phone {
                    color: #3c3c3c;
                    position: relative;
                    background: #fff;
                    font-size: .28rem;
                    text-align: center;
                    font-weight: 400;
                    // margin-top: .2rem;
                    // height: 1.28rem;
                    line-height: 1.28rem;
                    overflow: hidden;
                    width: 100%;
                    .phoneText:before,
                    .phoneText:after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: auto;
                        width: 6.4px;
                        width: .4rem;
                        border-top: 1px solid #e0e0e0;
                        transform: translate3d(-150%, -50%, 0);
                    }
                    .phoneText:after {
                        left: auto;
                        right: 1.12rem;

                    }
                }

            }
            .typePhone {
                width: 5.24rem;
                height: auto;
                background: #ffffff;

                .typePhoneBox {
                    width: 100%;
                }
                .typePhoneBox .product {
                    margin: .4rem 0 .6rem 0;
                    width: 33.333%;
                    height: 1.58rem;
                    float: left;

                    img {
                        display: block;
                        margin: 0 auto;
                        width: 1rem;
                        height: 1rem;
                        background: #fff;
                        overflow: hidden;
                    }

                    p {
                        display: block;
                        margin-top: .28rem;
                        white-space: nowrap;
                        font-size: .23rem;
                        text-align: center;
                        color: rgba(0, 0, 0, .54);
                    }

                }

            }
        }
        .navWrapper li.active {
            background-color: #3462fb3d;
        }

    }

    .type {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .ghcontainer {
        flex: 1;
    }

    .type .typeYM {
        position: absolute;
        top: 1.3rem;
        left: 1.96rem;
        width: 5.24rem;
        height: auto;
        overflow-y: auto;
    }


</style>