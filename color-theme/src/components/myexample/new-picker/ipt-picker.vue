<template>
  <el-form :inline="true" :model="formgroup" class="demo-form-inline">
    <el-col :span="8">
      <el-form-item width="30%">
        <el-input class="picker-input" v-model.number="formgroup.startValue"></el-input>
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
        <el-input class="picker-input" v-model="formgroup.endValue"></el-input>
      </el-form-item>
    </el-col>
  </el-form>
</template>
<script>
export default {
  props: ["group"],
  data() {
    return {
      formgroup: this.group
    };
  },
  watch: {
    formgroup: {
      function(val) {
        console.log(val);
      },
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
