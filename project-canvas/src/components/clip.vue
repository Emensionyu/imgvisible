<template>
  <canvas id="mycanvas" ref="canvas" width="300" height="400"></canvas>
</template>
<script>
export default {
  methods: {
    initCanvas() {
      this.drawScreenline();
    },
    drawScreenline() {
      this.canvas = this.$refs.canvas;
      //背景
      let context = this.canvas.getContext("2d");
      context.fillStyle='black';
      context.fillRect(10,10,200,200);
      context.save();
      context.beginPath();
//裁剪画布      
      context.rect(150,150,100,100)
      context.clip()

      context.beginPath();
      context.strokeStyle='red';
      context.lineWidth=5;
      
      

    },
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="less">
</style>
