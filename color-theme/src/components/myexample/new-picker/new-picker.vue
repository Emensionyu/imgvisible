<template>
  <div class="new-picker">
    <div class="picker-container" v-for="(item,index) in colorGroups" :key="index">
      <el-col :span="14">
        <ipt-picker
          :group="item"
          @changeGroup="handleChangeGroup"
          :validate="validate"
          message="必须输入数值哦"
        ></ipt-picker>
      </el-col>
      <el-col :span="10" class="">
        <cache-color></cache-color>
        <i class="el-icon-circle-plus-outline" @click="addGroupItem(item)"></i>
        <i class="el-icon-delete" @click="delectGroupItem(item)" v-show="index!=0"></i>
      </el-col>
     
    </div>
     <el-button @click="submitNewColor" size="smalls">确定</el-button>
  </div>
</template>
<script>
// const iptPicker = require("./ipt-picker");
import iptPicker from "./ipt-picker";
import cacheColor from "./cache-color";

export default {
  components: {
    iptPicker,
    cacheColor
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
    let reg=new RegExp(/^\d[0-9]*\d?$/)
    let reg2=new RegExp(/^\d[0-9]*\%$/)
    return (val&&reg.test(val))||(val&&reg2.test(val))
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
