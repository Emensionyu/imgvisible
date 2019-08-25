<template>
  <div class="new-picker">
    <!-- <select-type @select:type="handleSelectType"></select-type> -->
    <div class="picker-container" v-for="(item,index) in colorGroups" :key="index">
      <el-col :span="18">
        <ipt-picker
          :group="item"
          @change:group="handleChangeGroup"
          :validate="validate"
          message="必须输入数值哦"
          :maxValue="maxValue"
          :minValue="minValue"
          @select:type="handleSelectType"
          :select-type="selectType"
        ></ipt-picker>
      </el-col>
      <el-col :span="6" class="colorblock-container">
        <cache-color></cache-color>
        <!-- <new-colorblock @submit:color="handleSubmitColor" :itemGroup="item">
          <template v-slot:item="slotProps"></template>
        </new-colorblock> -->
        <i
          class="el-icon-circle-plus-outline"
          @click="addGroupItem(item)"
          v-show="showAdditem(item,index)"
        ></i>
        <i class="el-icon-delete" @click="delectGroupItem(item)" v-show="index!=0"></i>
      </el-col>
    </div>
    <el-button @click="submitNewColor" size="small" class="submit-button">确定</el-button>
  </div>
</template>
<script>
// const iptPicker = require("./ipt-picker");
import iptPicker from "./ipt-picker";
import cacheColor from "./cache-color";
import newColorblock from "./new-colorblock";
import selectType from "../common/select-type";
export default {
  components: {
    iptPicker,
    newColorblock,
    cacheColor,
    selectType
  },
  props: {
    maxValue: {
      type: Number,
      required: true
    },
    minValue: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selectType: "number",
      colorGroups: [
        {
          startValue: 0,
          endValue: 20,
          colorValue: "gray"
        }
      ]
    };
  },
  watch: {
    selectType(newval, oldval) {
      if (newval == "number") {
        this.colorGroups.forEach(element => {
          element.startValue = element.startValue.replace(/\%/, "");
          element.endValue = element.endValue.replace(/\%/, "");
        });
      } else if (newval == "percent") {
        this.colorGroups.forEach(element => {
          element.startValue = element.startValue + "%";
          element.endValue = element.endValue + "%";
        });
      }
    },
    maxValue(newval, oldval) {
      if (newval != oldval) {
        this.colorGroups.forEach(element => {
          element.startValue = 0;
          element.endValue = 0;
        });
      }
    }
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
          } else if (Object.keys(params).indexOf("nowstartValue") > -1) {
            tempArray[i].startValue = params.nowstartValue;
            break;
          }
        }
      }

      this.colorGroups = tempArray;
    },
    validate(val) {
      let maxValue = this.maxValue;
      let minValue = this.minValue;
      let reg = new RegExp(/^\d[0-9]*\d?$/);
      let reg2 = new RegExp(/^\d[0-9]*\%$/);
      //百分比如何计算呢
      return (
        ((val && reg.test(val)) || (val && reg2.test(val))) &&
        (val <= maxValue && val >= minValue)
      );
    },
    handleSubmitColor(params) {
      console.log(params);
      // console.log("选择的颜色是"+params.colorValue)
      let tempArray = this.colorGroups;
      let time = tempArray.length;
      for (let i = 0; i < time; i++) {
        if (
          tempArray[i].startValue == params.startValue &&
          tempArray[i].endValue == params.endValue
        ) {
          tempArray[i].colorValue = params.colorValue;
        }
      }

      this.colorGroups = tempArray;
    },
    submitNewColor(e) {
      this.$emit("submit:newcolor", this.colorGroups);
    },

    showAdditem(item,index) {
      let length = this.colorGroups.length;
      if (length == 1) {
        return true;
      } else if (index == length - 1) {
        return true;
      } else {
        return false;
      }
    },
    handleSelectType(val) {
      console.log(this.maxValue);
      this.selectType = val;
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
.colorblock-container {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  i {
    // margin-right: 10px;
    margin-left: 10px;
  }
}
.submit-button{
  position: absolute;
  right: 5px;
  top: 0px;
  padding: 5px;
}
</style>
