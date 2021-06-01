<template>
<!--轮播图-->
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>

//引入轮播
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'


export default {
    name: 'homeSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>

</style>

