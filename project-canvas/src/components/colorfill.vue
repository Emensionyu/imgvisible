<template>
  <canvas id="mycanvas" ref="canvas" width="100" height="100"></canvas>
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
      var gr = context.context.createLinearGradient(1, 1, 100, 0);
      gr.addColorStop(0, "rgba(255, 255, 255, 0)");
      gr.addColorStop(1, "rgba(0, 255, 0, 0.2)");

      context.setFillStyle(gr);
      context.fillRect(0, 0, 100, 100);
      context.draw();
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="less">
</style>
