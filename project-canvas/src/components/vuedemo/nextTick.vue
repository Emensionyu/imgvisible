<template>
  <div>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "未更新",
      someObject: {}
    };
  },
  methods: {
    updateMessage: async function() {
      this.message = "已更新";
      console.log(this.$el.textContent); // => '未更新'
      // this.$nextTick(function () {
      //   console.log(this.$el.textContent) // => '已更新'
      // })
      await this.$nextTick();
      console.log(this.$el.textContent);
      //vue 更新dom是异步的
      // 同一个watcher被多次触发,只会被推入到队列中一次.
      // 为了让数据变化后更新dom 使用nextTick(callback)
    }
  },
  mounted() {
    this.updateMessage();

    this.$set(this.someObject, "b", 2);
    console.log(this.someObject.b);
    //向嵌套对象添加响应式属性
    Object.assign(this.someObject, { a: 1, b: 3 });
    Object.assign(this.someObject, { a: 11, b: 33 });
    this.someObject=Object.assign({},this.someObject, { a: 11, b: 33 });
    //新属性和原来属性合并
    console.log("this.someObject.a" + this.someObject.a);
    console.log("this.someObject.b" + this.someObject.b);
  }
};
</script>

<style lang="less" scoped>
</style>