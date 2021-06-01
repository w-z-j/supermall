<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"/>   <!--动态传参过去-->
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control :titles="['流行', '新款', '精选']" class="tab-control" />
        <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
        </ul>
    </div>
</template>

<script>
import HomeSwiper from './childComps/homeSwiper.vue'//引入轮播
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import NavBar from '@/components/common/navbar/Navbar'
import TabControl from '@/components/content/tabControl/TabControl'

//引入请求
import {getHomeMultidata} from '@/network/home'


export default {
    name: 'Home',
    data(){
        return {
            banners: [],
            recommends: [],
        }
    },
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl,
    },
    created(){
        //1. 请求多个数据
        getHomeMultidata().then(res => {
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    /*首页状态栏的背景颜色 */
    #home .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }

    #home .tab-control {
        position: sticky;
        top: 44px;      /*当距离顶部为44px时，就会设定为固定定位 */
    }

</style>
