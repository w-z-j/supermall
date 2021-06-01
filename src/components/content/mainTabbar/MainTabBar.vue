<template>
<!--底部导航栏-->
    <tar-bar>
      <tar-bar-item path="/home" activecolor='red'> <!--path和activecolor为动态传参 props接收-->
        <img src="@/assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">
          首页
        </div>
      </tar-bar-item>
      <tar-bar-item path="/category" activecolor='red'>
        <img src="@/assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">
          分类
        </div>
      </tar-bar-item>
      <tar-bar-item path="/cart" activecolor='red'>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">
          购物车
        </div>
      </tar-bar-item>
      <tar-bar-item path="/profile" activecolor='red'>
        <img src="@/assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">
          我的
        </div>
      </tar-bar-item>
    </tar-bar>
</template>

<script>

import TarBar from '../../common/tarbar/TarBar';
import TarBarItem from '../../common/tarbar/TarBarItem';

export default {
    name: 'MainTabBar',
    components: {
        TarBar,
        TarBarItem,
    }
}
</script>
<style scoped>

</style>