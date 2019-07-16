<template>
  <el-popover placement="top" width="300" trigger="click">
    <div class="cache-container">
      <canvas id="mycanvas" ref="canvas" width="300" height="300"></canvas>
    </div>
    <el-button slot="reference" class="cache-button">
      <div class="cache-color"></div>
    </el-button>
  </el-popover>
</template>

<script>
export default {
  data(){
    return{
      canvas:null,
      ctx:null
    }
  },
  methods: {
    initCanvas() {
      this.drawColor();
    },
    drawColor() {
      this.canvas = this.$refs.canvas;
      //背景
      let ctx = this.canvas.getContext("2d");
      let grd = ctx.createLinearGradient(0, 0, 0, 300);
      for(let i=1;i<=360;i++){
          grd.addColorStop((i/360).toFixed(4), this.gethsl(i));
      }
      // grd.addColorStop(0,'hsl(0,100%,50%)');
      // // grd.addColorStop(0.5,'#f0f');
      // grd.addColorStop(1,'hsl(360,100%,50%)');
      ctx.fillStyle=grd;
      ctx.fillRect(100, 0, 30, 300);
     ctx.stroke();
    },
    gethsl(i){
      // console.log("hsl("+i+",100%,100%)")
      return "hsl("+i+",100%,50%)"

    },
    // pick(e,ctx){
    //   let x = e.layerX,
		// 		y = e.layerY,
		// 		pixel = ctx.getImageData(x, y, 1, 1),
    //     data = pixel.data;
        
    // }
  },
  mounted() {
    this.initCanvas();
    // this.canvas.onmousemove = () => {
		// 	this.pick(event, this.ctx);
		// }
  }
};
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
.cache-container {
  width: 100%;
  height: 300px;
}
</style>
