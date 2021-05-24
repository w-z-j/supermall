<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"/>   <!--动态传参过去-->
        <recommend-view :recommends="recommends" />
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/Navbar'
import HomeSwiper from './childComps/homeSwiper.vue'//引入轮播
import RecommendView from './childComps/RecommendView'


//引入请求
import {getHomeMultidata} from '../../network/home'


export default {
    name: 'Home',
    data(){
        return {
            banners: [],
            recommends: [],
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
    },
    created(){
        //1. 请求多个数据
        getHomeMultidata().then(res => {
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>

<style scoped>

    /*首页状态栏的背景颜色 */
    #home .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }


</style>
