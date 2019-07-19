<template>
  <div>
   <current-user>
       <template v-slot:user="slotProps"> 
            {{slotProps.user.firstName}}
       </template>
       <!-- // -->
       <template v-slot:item="props">
           {{props.value}}
       </template>
       <!-- 解构插槽 -->
       <!-- 作用域插槽内部工作原理就是将你的插槽内容包括在一个传入单个参数的函数里 -->
        <template v-slot:item="{value,name}">
           {{value}}+{{name}}
       </template>
   </current-user>
  </div>
</template>

<script>
import currentUser from './current-user'
export default {
    components:{
        currentUser,
    },
    data(){
        return{
        //     user:{
        //         firstName:'hahah',
        //         lastName:'mm'
        //     }
        }
    }
};
</script>

<style lang="less" scoped>
</style>