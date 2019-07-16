<template>
    <li class="bi-color-cubes__item" 
        :style="colorBoxStyle"
        @click="handlerselectColor"
        ></li>
</template>
<script>
export default {
    props:["color"],
    data(){
        return{
        }
    },
    computed:{
        colorBoxStyle(){
            return{
                "background-color":this.color
            }
        }
    },
    methods:{
        handlerselectColor(){
            this.$emit('select:color',this.color)

        }
    }
}
</script>
<style lang="less">
.bi-color-cubes__item{
    float: left;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
}

</style>
