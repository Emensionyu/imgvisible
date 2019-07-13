<template>
    <div>
        <input type="checkbox" v-model="checked" >
        <slot name="itemObjext" v-bind="{checked}"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked:true
        }
    }
}
</script>
<style lang="less">

</style>
