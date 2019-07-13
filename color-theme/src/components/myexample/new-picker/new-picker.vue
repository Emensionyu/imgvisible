<template>
  <div class="new-picker">
    <div class="picker-container" v-for="(item,index) in colorGroups" :key="item.startValue">

      <el-col :span="14">
        <ipt-picker :group="item"
        @group-change="this.handlerGroupChange(val,index)"
        ></ipt-picker>
        
      </el-col>

      <el-col :span="10" class="">
        <cache-color></cache-color>
        <i class="el-icon-circle-plus-outline" @click="addGroupItem(item)"></i>
        <i class="el-icon-delete" @click="delectGroupItem(item)" v-show="index!=0"></i>
      </el-col>
    </div>
  </div>
</template>
<script>
// const iptPicker = require("./ipt-picker");
import iptPicker from './ipt-picker'
import cacheColor from './cache-color'

export default {
  components: {
    iptPicker,
    cacheColor,
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
      if(this.colorGroups.length<5){
        this.colorGroups.push({
        startValue: item.endValue,
        endValue: 0,
        colorValue: "gray"
      });
      }
      
    },
    delectGroupItem(item) {
      console.log(JSON.stringify(item)+"item")
      var tempArray = this.colorGroups;
      let time=tempArray.length;
      for(let i=0;i<time;i++){
        if(Number(tempArray[i].startValue)==Number(item.startValue)&&Number(tempArray[i].endValue)==Number(item.endValue)){
          tempArray.splice(i,1);
          break;
        }
      }
      this.colorGroups=tempArray
     
    },
    handlerGroupChange(val){
        console.log(JSON.stringify(val))

    }
  }
};
</script>
<style lang="less">
.picker-container{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10 0;
    width: 100%

}
.picker-body{
    width: 70%
}
.picker-icon{
    display: inline-block;
}
</style>
