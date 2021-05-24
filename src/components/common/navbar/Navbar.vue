<template>
<!--导航栏，根据要求，导航栏分为三个部分，左中右，放三个插槽，往里添加内容；不能直接往插槽设置class，所以在外包个div-->
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;   /*一般导航栏的高度为44px，如果算上状态栏的高度是64px */
        line-height: 44px; 
        text-align: center;
        box-shadow: 0 1px 2px rgba(100, 100, 100, 0.1);
    }

    .left, .right {
        width: 60px;
    }

    .center {
        flex: 1;
    }
</style>

