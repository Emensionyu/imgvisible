<template>
  <div>
    <el-popover ref="popver" placement="bottom" width="750" trigger="click" v-model="visible">
      <div class="colorpick-container">
        <div class="old-mode">
          <div class="old-mode-header">
            <el-radio v-model="mode" label="old">老模式</el-radio>
          </div>
          <div class="old-mode-body">
            <old-picker @submit:oldcolor="handleOldColor"></old-picker>
          </div>
        </div>
        
        <div class="new-mode">
          <div class="old-mode-header">
            <el-radio v-model="mode" label="new"  >新模式</el-radio>
          </div>
          <div class="old-mode-body">
            <new-picker @submit:newcolor="handleNewColorGroup" :max-value="maxValue" :min-value="minValue"></new-picker>
          </div>
        </div>
      </div>
      <div class="bi-property-btn__icon" slot="reference">
        <span class="bi-icon-al-color"></span>
      </div>

    </el-popover>
  </div>
</template>
<script>
//http://www.ceshi113.com/html/fxui/index.html#/component/popover
// const oldPicker = require("./old-picker/old-picker");
// const newPicker = require("./new-picker/new-picker");
import oldPicker from './old-picker/old-picker'
import newPicker from './new-picker/new-picker'
// import './color-picker.less'
export default {
  components: {
    oldPicker,
    newPicker
  },
  props:{
    maxValue:{
      type:Number,
      required:true
    },
    minValue:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      visible: true,
      mode: "old",
      oldColor:'',
      colorGroup:[]
    };
  },

  methods: {
    handleOldColor(color){
      // console.log('最终选择的老模式颜色是'+color)
      this.oldColor=color
      this.handleSubmit();
    },
    handleNewColorGroup(colorGroup){
      this.colorGroup=colorGroup
      // console.log('最终选择的新模式的颜色数组是'+JSON.stringify(colorGroup))
      this.visible=false
      this.handleSubmit();
    },
    handleSubmit(){
      if(this.mode=='old'){
        this.$emit('select',this.oldColor)
      }else if(this.mode=='new'){
        this.$emit('select',this.colorGroup)
      }
      
    }
  },
  mounted() {
   
  }
};
</script>
<style lang="less">
.colorpick-container{
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    height: 400px;
    
}
.old-mode{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:40%;
    margin-right: 20px;
}
.old-mode::after{
  content:'';
  width:2px;
  border: 1px solid gray;
  position: relative;
  
}
.old-mode-header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    height: 30px;
}
.old-mode-body{
    width: 100%;
    position: relative;
    left: 0;
}
.new-mode{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:60%;
}
.new-mode-header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    height: 30px;
}
.el-popover{
  padding: 0
}
.bi-property-btn__icon{
  margin: 0 auto;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 3px;
  color: #666;
  cursor: pointer;

}
.bi-icon-al-color{
  background-image: url(./images/sprite.png);
    background-position: 0px -152px;;
    width: 32px;
    height: 32px;
    display: block;
    color: transparent;
    .bi-icon-al-color:hover{
  background-color: #3487e2 !important;
  background-position: -152px -114px;
}
}

</style>

