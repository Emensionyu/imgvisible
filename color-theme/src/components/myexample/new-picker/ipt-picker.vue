<template>
  <el-form :inline="true" class="demo-form-inline">
    <el-col :span="8">
      <el-form-item width="30%">
        <!-- <el-input class="picker-input" :value="formgroup.startValue"
      @change="handleStartValueChange"
        ></el-input>-->
        <el-input class="picker-input" :value="group.startValue" @input="handleStartValueChange"></el-input>
      </el-form-item>
    </el-col> 
    <el-col :span="8">
      <div class="poicker-range">
        <i class="el-icon-arrow-right"></i>
        <span>且(And)</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-col>
    <el-col :span="8">
      <el-form-item width="30%">
        <!-- <el-input class="picker-input" :value="formgroup.endValue"
        @change="handleEndValueChange"></el-input>-->
        <el-input class="picker-input" :value="group.endValue" @input="handleEndValueChange"></el-input>
      </el-form-item>
      <div class="message" v-show="showMessage">{{message}}</div>
    </el-col>
  </el-form>
</template>
<script>
export default {
  props: ["group","message","validate"],
  data() {
    return {
      formgroup: this.group,
      showMessage:false
    };
  },
  watch: {
    "group.startValue":function(val){
      this.handleValidate(val)
    }
  },
  methods: {
    handleStartValueChange(val) {
      this.$emit("changeGroup", {
        ...this.formgroup,
        nowstartValue: val
      });
      // this.$refs.start.focus;
    },
    handleEndValueChange(val) {
      this.$emit("changeGroup", {
        ...this.formgroup,
        nowendValue: val
      });
    },
    handleValidate(val){
    let res=this.validate(val);
    this.showMessage=!res
  }
  },
  
};
</script>
<style lang="less">
.picker-range {
  display: inline-block;
  text {
    margin: 0 10px;
  }
  margin: 0 10px;
}
.el-form {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
  height: 60px;
}
.el-form-item {
  margin-bottom: 0;
}
</style>
