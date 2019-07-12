<template>
  <el-popover placement="top" width="300" trigger="click">
      <div class="cache-container">

      </div>



    <el-button slot="reference" class="cache-button">
      <div class="cache-color"></div>
    </el-button>
  </el-popover>
</template>

<script>
export default {};
</script>


<style lang="less">
.cache-color {
  width: 20px;
  height: 20px;
  background-color: pink;
  display: inline-block;
}
.cache-button {
  padding: 0;
  border: none;
}
.cache-container{
    width: 100%;
    height: 300px;;
}
</style>
