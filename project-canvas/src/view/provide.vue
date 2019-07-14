<template>
    <div class="provide">
        <button @click="getRef">获取节点</button>
    </div>
</template>
<script>
import A from '@/components/A'
export default {
    components:{
        A,
    },
    provide(){
        return{
            getRef:()=>{
                return this;
            }
        }
    }
}
</script>
<style lang="less">

</style>
