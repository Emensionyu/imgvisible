<template>
  <div class="new-picker">
    <div class="picker-container" v-for="(item,index) in colorGroups" :key="index">
      <el-col :span="14">
        <ipt-picker
          :group="item"
          @change:group="handleChangeGroup"
          :validate="validate"
          message="必须输入数值哦"
        ></ipt-picker>
      </el-col>
      <el-col :span="10" class="">
        <!-- <cache-color></cache-color> -->
        <new-colorblock @submit:color="handleSubmitColor" :itemGroup="item">
          <template v-slot:item="slotProps"></template>
        </new-colorblock>
        <i class="el-icon-circle-plus-outline" @click="addGroupItem(item)"></i>
        <i class="el-icon-delete" @click="delectGroupItem(item)" v-show="index!=0"></i>
      </el-col>
     
    </div>
     <el-button @click="submitNewColor" size="small">确定</el-button>
  </div>
</template>
<script>
// const iptPicker = require("./ipt-picker");
import iptPicker from "./ipt-picker";
import cacheColor from "./cache-color";
import newColorblock from './new-colorblock'

export default {
  components: {
    iptPicker,
    newColorblock,
    cacheColor
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
      colorGroups: [
        {
          startValue: 0,
          endValue: 20,
          colorValue: "gray"
        }
      ]
    };
  },
  methods: {
    addGroupItem(item) {
      if (this.colorGroups.length < 5) {
        this.colorGroups.push({
          startValue: item.endValue,
          endValue: 0,
          colorValue: "gray"
        });
      }
    },
    delectGroupItem(item) {
      console.log(JSON.stringify(item) + "item");
      let tempArray = this.colorGroups;
      let time = tempArray.length;
      for (let i = 0; i < time; i++) {
        if (
          tempArray[i].startValue == item.startValue &&
          tempArray[i].endValue == item.endValue
        ) {
          tempArray.splice(i, 1);
          break;
        }
      }
      this.colorGroups = tempArray;
    },
    handleChangeGroup(params) {
      let tempArray = this.colorGroups;
      let time = tempArray.length;
      for (let i = 0; i < time; i++) {
        if (
          tempArray[i].startValue == params.startValue &&
          tempArray[i].endValue == params.endValue
        ) {
          if (Object.keys(params).indexOf("nowendValue") > -1) {
            tempArray[i].endValue = params.nowendValue;
            break;
          }else if(Object.keys(params).indexOf("nowstartValue") > -1){
            tempArray[i].startValue = params.nowstartValue;
            break;
          }
        }
      }

      this.colorGroups = tempArray;
    },
    validate(val){
      let maxValue=this.maxValue;
      let minValue=this.minValue
    let reg=new RegExp(/^\d[0-9]*\d?$/)
    let reg2=new RegExp(/^\d[0-9]*\%$/)
    return ((val&&reg.test(val))||(val&&reg2.test(val)))&&(val<=maxValue&&val>=minValue)
    },
    handleSubmitColor(params){
      console.log(params)
      // console.log("选择的颜色是"+params.colorValue)
       let tempArray = this.colorGroups;
      let time = tempArray.length;
      for (let i = 0; i < time; i++) {
        if (
          tempArray[i].startValue == params.startValue &&
          tempArray[i].endValue == params.endValue
        ) {
          tempArray[i].colorValue=params.colorValue
        }
      }

      this.colorGroups = tempArray;

    },
    submitNewColor(e){
      this.$emit('submit:newcolor',this.colorGroups)
    }
  }
};
</script>
<style lang="less">
.picker-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10 0;
  width: 100%;
}
.picker-body {
  width: 70%;
}
.picker-icon {
  display: inline-block;
}
</style>
