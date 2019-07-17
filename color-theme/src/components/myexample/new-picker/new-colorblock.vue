<template>
  <el-popover  
  v-model="visible"
   placement="bottom" width="320" trigger="click" style="padding:0">
    <old-picker
      @submit:oldcolor="handleSelectnewColor"
      :prop-color="origincolorBoxData"
      :is-new="true"
      
    ></old-picker>
      
    <el-button slot="reference" class="cache-button">
      <div class="cache-color" :style="boxStyle"></div>
    </el-button>
  </el-popover>
</template>

<script>
import oldPicker from '../old-picker/old-picker'
// const oldPicker=require('../old-picker/old-picker')
    export default {
        components:{
            oldPicker,
        },
        props:['itemGroup'],
        data(){
            return{
                visible:true,
                 boxStyle:{'background-color':'pink'},
                  color:'',
                origincolorBoxData:[{
                    title: ("默认"),
                    val: 0,
                    icon: {
                     colors:["#3082ff",   "#16b4ab",  "#94ce55",   "#ffd22a",   "#ff8000"]
                    }
                }, {
                    title: ("清新"),
                    val: 1,
                    icon: {
                     colors:["#bee3ff",   "#3aacff",   "#0678cd",   "#54d1c7",   "#03958d"]
                    }
                }, {
                    title: ("黎明"),
                    val: 2,
                    icon: {
                     colors:["#ff704f",    "#ffab98",   "#cec5f8",   "#936de3",   "#5f37b3",]
                    }
                }, {
                    title: ("午后"),
                    val: 3,
                    icon: {
                     colors:["#0678cd",   "#30c776",   "#ffd94a",   "#60bcff",   "#065fa4",]
                    }
                }, {
                    title: ("黄昏"),
                    val: 4,
                    icon: {
                     colors:["#ffd94a",   "#ffa250",   "#ff6a81",   "#baadf5",   "#936de3",]
                    }
                }]
            }
        },
        watch:{
            color(val){
                this.boxStyle={'background-color':val}
            }

        },
        
        methods:{
            handleSelectnewColor(val){
               this.visible=false
                this.color=val
                this.$emit('submit:color',{
                    ...this.itemGroup,
                    colorValue:val
                })
                console.log(JSON.stringify({...this.itemGroup,colorValue:val}))
            }
        }
    }
</script>

<style lang="less" scoped>
.cache-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: pink;
  display: inline-block;
}
.cache-button {
  padding: 0;
  border: none;
}
</style>