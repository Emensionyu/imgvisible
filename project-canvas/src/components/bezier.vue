<template>
  <canvas id="mycanvas" ref="canvas" width="300" height="400"></canvas>
</template>
<script>
export default {
  methods: {
    initCanvas() {
      // this.drawScreenline();
    },
    drawScreenline() {
      this.canvas = this.$refs.canvas;
      //背景
      let context = this.canvas.getContext("2d");
      context.strokeStyle = "pink";
      context.lineWidth = 10;
      context.lineCap = "square";
      context.beginPath();
      context.moveTo(150, 0);
      context.bezierCurveTo(0,0,300,300,150,300)
       context.moveTo(150, 300);
    //   context.bezierCurveTo(0,15,300,175,150,700)

      context.stroke();
      context.closePath();

      context.rect(150,150,100,100)
      context.clip()

    },
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="less">
</style>
