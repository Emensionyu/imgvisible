<template>
  <div class="container">
    <canvas id="mycanvas" ref="canvas" :width="canvasWidth" height="400"></canvas>
    <!-- <grid :grid-data="data" :columns="columns" showCheckbox columnSet></grid> -->
    <form
      type="button"
      ref="createImageData"
      v-on:click="todataImage()"
      style="height:20px"
    >Export Canvas Image</form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvasWidth: 300,
      canvas: "",
      fadeIn: true,
      alpha: 0
    };
  },
  methods: {
    initCanvas() {
      this.drawScreen();
    },
    //打开窗口显示绘制图片
    todataImage() {
      window.open(
        this.canvas.toDataURL(),
        "canvasimage",
        "left=0,top=0,width=" +
          this.canvas.width +
          ",height=" +
          this.canvas.height +
          ",toolbar=0,resizable=0"
      );
    },
    drawScreen() {
      this.canvas = this.$refs.canvas;
      //背景
      // let ctx = this.canvas.getContext("2d");
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ffffaa";
      ctx.fillRect(0, 0, 300, 300);

      if (this.fadeIn) {
        this.alpha += 0.01;
        if (this.alpha >= 1) {
          this.alpha = 1;
          this.fadeIn = false;
        }
      } else {
        this.alpha -= 0.01;
        if (this.alpha <= 1) {
          this.alpha = 0;
          this.fadeIn = true;
        }
      }

      ctx.textBaseline = "top";
      ctx.globalAlpha = this.alpha;

      ctx.fillStyle = "#000000";
      ctx.font = "20px Sans-serif";
      ctx.textBaseline = "top";
      ctx.fillText("hello world", 150, 80);

      // var helloWorld = new Image();
      // helloWorld.onload = function() {
      //   ctx.drawImage(helloWorld, 100, 110);
      // };
      // helloWorld.src = "../assets/logo.png";

      // ctx.strokeStyle = "#000000";
      // ctx.strokeRect(5, 5, 300, 300);
      // console.log(canvas.toDataURL())
    },
    // changcanvasWidth() {
    //   setTimeout(() => {
    //     this.canvasWidth = 600;
    //   }, 2000);
    // },
    gameLoop() {
      setTimeout(() => {
        this.gameLoop();
      }, 20);
      this.drawScreen();
    }
  },
  mounted() {
    this.initCanvas();
    this.gameLoop();
    // this.changcanvasWidth()
  }
};
</script>
<style lang="less">
</style>

