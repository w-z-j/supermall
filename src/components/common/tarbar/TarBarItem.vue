<template>
      <div class="tar-bar-item">
            <div  v-if="!isactive" @click="btnClick"><slot name="item-icon"></slot></div>
            <div v-else @click="btnClick"><slot name="item-icon-active"></slot></div>
            <!--这里存放点击后的图片，利用v-if进行切换和隐藏；但由于是因为替换，所以在外层用div包裹起来-->   
            <div :style="colorA" @click="btnClick"><slot name="item-text"></slot></div>
      </div>
</template>
<script>
export default {
    name: 'TarBarItem',
    props: {
        path: String,   
        activecolor: {
            type: String,
            default: 'red'
        },
    },
    data(){
        return {
            // isactive: true,
        }
    },
    computed: {
        isactive(){
            return (this.$route.path.indexOf(this.path) !== -1);
        },
        colorA(){
            return this.isactive ? {color: this.activecolor} : {}
        }
    },
    methods: {
        btnClick(){
            // console.log('这是点击事件');
            if(this.path != this.$route.path){
                this.$router.push(this.path);
            }
        }
    },
}
</script>

<style scoped>
    .tar-bar-item {
        flex: 1;  /*均等分布*/
        height: 49px;
        text-align: center;
        font-size: 14px;
    }

    .tar-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>
