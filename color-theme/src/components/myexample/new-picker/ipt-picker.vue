<template>
  <el-form :inline="true" class="demo-form-inline">
    <el-col :span="9">
      <el-form-item width="30%">
        <div class="input-item-container">
          <div class="input-value">
            <el-input
              class="picker-input"
              v-model.trim="group.startValue"
              @blur="testStartValue"
              @keyup.native="handleInput"
            ></el-input>
          </div>

          <div class="input-select">
            <select-type @select:type="handleSelectType" :select-type="selectType"></select-type>
          </div>
        </div>
         <div class="validate-message" v-show="flagStart">请输入合理数值</div>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <div class="picker-range">
        <i class="el-icon-arrow-right"></i>
        <span class="range-text">且(And)</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-col>
    <el-col :span="9">
      <el-form-item width="30%">
        <div class="input-item-container">
          <div class="input-value">
            <el-input class="picker-input" v-model="group.endValue" @blur="testEndValue"></el-input>
          </div>

          <div class="input-select">
            <select-type @select:type="handleSelectType" :select-type="selectType"></select-type>
          </div>
        </div>
        <div class="validate-message" v-show="flagEnd">请输入合理数值</div>
      </el-form-item>
      <!-- <div class="message" v-show="showMessage">{{message}}</div> -->
    </el-col>
  </el-form>
</template>
<script>
import selectType from "../common/selete-type";
export default {
  props: ["group", "message", "validate", "maxValue", "minValue", "selectType"],
  data() {
    return {
      formgroup: this.group,
      showMessage: false,
      flagStart: false,
      flagEnd: false
    };
  },
  components: {
    selectType
  },
  watch: {
    "group.startValue": function(val) {
      // console.log("校验group.startValue" + val);
      if(this.selectType=='percent'){
      this.flagStart = this.handleValidate(val);

      }
    },
    "group.endValue": function(val) {
      console.log("正在校验group.endValue" + val+typeof(val));

      this.flagEnd = this.handleValidate(val);
    }
  },
  methods: {
    handleInput(e) {},
    handleValidate(val) {
      return Number((val+"").replace(/\%/g, "")) > 100;
    },
    testStartValue(e) {
      console.log(e.target.value);
      let value = e.target.value;
      if (this.selectType == "number") {
        //校验输入的值为数字
        let operatedValue = Number(value.trim().replace(/\%/g, ""));
        if (operatedValue >= this.maxValue) {
          operatedValue = this.maxValue;
        }
        this.$emit("change:group", {
          ...this.formgroup,
          nowstartValue: operatedValue
        });
      } else if (this.selectType == "percent") {
        let operatedValue = Number(value.trim().replace(/\%/g, "")) + "%";
        if (Number(value.trim().replace(/\%/g, "")) >= 100) {
          operatedValue = "100%";
        }
        this.$emit("change:group", {
          ...this.formgroup,
          nowstartValue: operatedValue
        });
      }
    },
    testEndValue(e) {
      let value = e.target.value;
      if (this.selectType == "number") {
        //校验输入的值为数字
        let operatedValue = Number(value.trim().replace(/\%/g, ""));
        if (operatedValue >= this.maxValue) {
          operatedValue = this.maxValue;
        }
        this.$emit("change:group", {
          ...this.formgroup,
          nowendValue: operatedValue
        });
      } else if (this.selectType == "percent") {
        let operatedValue = Number(value.trim().replace(/\%/g, "")) + "%";
        if (Number(value.trim().replace(/\%/g, "")) >= 100) {
          operatedValue = "100%";
        }
        this.$emit("change:group", {
          ...this.formgroup,
          nowendValue: operatedValue
        });
      }
    },
    handleSelectType(val) {
      this.$emit("select:type", val);
    }
  }
};
</script>
<style lang="less">
.picker-range {
  display: inline-block;
  margin-top: 10px;
  // position: absolute;
  // top: 20px;
  // text {
  //   margin: 0 10px;
  // }
  // margin: 0 10px;
}
.el-form {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  // justify-content: ;
  margin: 0;
}
.el-form-item {
  margin-bottom: 0;
}
// .picker-input{
//   padding: 0;
//   margin: 0;
//   height: 30px;
//   line-height: 30px;;
// }
.el-input__inner {
  appearance: none;
  border: none;
  height: 30px;
  padding: 0 10px;
  width: 100%;
  border-right: none;
  // line-height: 30px;
  border-radius: none;
}
.el-form-item__content {
  height: 60px;
  position: relative;
  line-height: 20px;
  // margin: 10px 0;
}
.input-item-container {
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 4px;
  height: 34px;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  .input-select {
    float: right;
  }
}
.input-value {
}
.range-text {
  font-size: 10px;
}
.validate-message {
  position: absolute;
  bottom: 0;
  font-size: 10px;
  color: red;
  // margin-top: 10px;
  height: 20px;
  margin-bottom: 10px;
}
input, select, textarea {
    font: 13px/1.5 tahoma,arial,'Hiragino Sans GB','Hiragino Sans GB W3','Microsoft Yahei',\5b8b\4f53;
}
</style>
