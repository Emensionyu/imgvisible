<template>
<div class="demo">
     <div class="A">AAA</div>
     <input type="text" name="" id="" v-model="message">
   <slot></slot>  
</div>
   
   
</template>
<script>
export default {
    data(){
        return{
            message:''
        }
    }
    
}
</script>
<style>

</style>
