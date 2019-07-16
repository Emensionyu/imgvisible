<template>
    <div>
          <color-picker :maxValue=200 :minValue=0
          @select="handleSubmit"
          >
        
        </color-picker>
    </div>
</template>

<script>
    // const colorPicker = require('./color-picker');
    import colorPicker from './color-picker'
    export default {
        components: {
            colorPicker
        },
        data(){
            return{
                val:[]||''
            }
        },
        methods:{
            handleSubmit(val){
                this.val=val;
                console.log(val)
            }
        },
        mounted(){
            // this.colorPicker=new colorPicker({
            //     maxValue:200,
            //     minValue:0

            // }).$mount()
             
            // this.colorPicker.$on('select',( val)=>{
            //     this.val = val;
            //     console.log("val"+val)
            // })
        }
    }
</script>
