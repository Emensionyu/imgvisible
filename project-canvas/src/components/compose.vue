<template>
  <canvas id="mycanvas" ref="canvas" width="300" height="400"></canvas>
</template>
<script>
export default {
  methods: {
    initCanvas() {
      this.drawScreen2();
    },

    drawScreen2(){
         this.canvas = this.$refs.canvas;
      //背景
      let context = this.canvas.getContext("2d");
    //   context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(125, 125);
    
      var angle=45*Math.PI/180;
      context.rotate(angle);
      context.scale(2,2)
      context.fillStyle='navy';
      context.fillRect(100,74,50,50)
      //调用rotate函数之后绘制的形状才会收到影响 旋转点默认在(0,0)
      //将原点平移.
    },
    drawScreen() {
      this.canvas = this.$refs.canvas;
      //背景
      let context = this.canvas.getContext("2d");
      context.fillStyle='black';
      context.fillRect(10,10,200,200);

      context.fillStyle='red';
      context.fillRect(1,1,50,50);

      //设置合成模式
      context.globalCompositeOperation='source-over';
      context.fillText(60, 1, 50,50);

      
        //   context.globalCompositeOperation="source-atop";
        //   context.fillRect(1,60,50,50)
      context.globalAlpha=.5;
      context.globalCompositeOperation="copy";
      context.fillRect(1,60,50,50)
      
    },
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="less">
</style>
