<template>
  <canvas id="mycanvas" ref="canvas" width="300" height="400"></canvas>
</template>
<script>
export default {
  methods: {
    initCanvas() {
      this.drawScreenline();
      this.drawScreenarc();
    },
    drawScreenline() {
      this.canvas = this.$refs.canvas;
      //背景
      let context = this.canvas.getContext("2d");
      context.strokeStyle = "round";
      context.lineWidth = 10;
      context.lineCap = "square";
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(25, 0);
      context.lineTo(25, 25);

      context.lineJoin = "round";

      context.stroke();
      context.closePath();
      // 不同的效果
      context.lineJoin = "round";
      context.lineCap = "butt";
      context.beginPath();
      context.moveTo(10, 100);
      context.lineTo(35, 100);
      context.lineTo(35, 125);
      context.stroke();
      context.closePath();
    },
    drawScreenarc() {
      this.canvas = this.$refs.canvas;
      let context = this.canvas.getContext("2d");
      context.beginPath();
      context.strokeStyle = "yellow";
      context.lineWidth = 5;
      context.arc(
        100,
        100,
        30,
        (Math.PI / 180) * 0,
        (Math.PI / 180) * 180,
        false
      );
      context.stroke();
      context.closePath()
      
      context.beginPath();
      context.lineTo(100,200);
      context.arcTo(350, 350, 100, 100, 20);
      context.stroke()
      
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="less">
</style>
