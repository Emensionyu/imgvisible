<template>
  <div class="wrapper">
    <button @click="test">按钮</button>
    <el-radio-group v-model="radio">
      <el-radio :label="3" size="medium">备选项</el-radio>
      <el-radio :label="6" size="small">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    <input type="radio" name="选项５" id>
    <!-- <select @change:type="sortChangeReport" title="筛选:" :select-types="selectReportTypes"></select> -->
  </div>
</template>
<script>
// import select from "./select";
export default {
  name: "HelloWorld",
  // components: {
  //   select
  // },
  data() {
    return {
      radio: 3,
      selectReportTypes: [
        {
          name: $t("全部"),
          value: 3
        },
        {
          name: $t("我创建的"),
          value: 1
        },
        {
          name: $t("我编辑的"),
          value: 2
        }
      ]
    };
  },
  methods: {
    test() {
      debugger;
      this.$emit("test", "666");
    }
  }
};
</script>