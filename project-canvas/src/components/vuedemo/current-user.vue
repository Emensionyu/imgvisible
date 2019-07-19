<template>
  <div>
    <slot name=user v-bind:user="user">{{user.lastName}}</slot>
    <!-- 有后备内容的插槽 -->
    <slot name="item" v-bind="{value:'vue',name:'item'}"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "hahah",
        lastName: "mm"
      }
    };
  }
};
</script>

<style lang="less" scoped>
</style>