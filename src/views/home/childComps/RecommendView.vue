<template>
<!--轮播图下面的内容-->
    <div class="recommend">
        <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default(){
                return []   //默认值
            }
        }
    }
}
</script>

<style scoped>
.recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}

.recommend .recommend-item {
    flex: 1;
}

.recommend .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>

