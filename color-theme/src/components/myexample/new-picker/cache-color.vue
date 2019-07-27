<template>
  <el-popover placement="top" width="550" trigger="click">
    <div class="cache-container">
      <canvas id="mycanvas" ref="canvas" width="350" height="300"></canvas>
    </div>
    <div class="hsl-container">
      <div class="hsl-container-top"></div>
      <div class="hsl-container-form">
        <div class="hsl-item">
          h:
          <input v-model="hsl.h" />
        </div>
        <div class="hsl-item">
          s:
          <input v-model="hsl.s" />
        </div>
        <div class="hsl-item">
          l:
          <input v-model="hsl.l" />
        </div>
      </div>
    </div>

    <el-button slot="reference" class="cache-button">
      <div class="cache-color"></div>
    </el-button>
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      hsl: {h:360}
    };
  },
  methods: {
    initCanvas() {
      this.drawColor();
    },
    drawColor() {
      this.canvas = this.$refs.canvas;
      //背景
      let ctx = this.canvas.getContext("2d");
      this.ctx = ctx;
      let grd = ctx.createLinearGradient(300, 0, 300, 300);
      for (let i = 1; i <= 360; i++) {
        grd.addColorStop((i / 360).toFixed(4), this.gethslByh(i));
      }
      ctx.fillStyle = grd;
      ctx.fillRect(300, 0, 50, 300);
      ctx.stroke();
    },
    gethslByh(i) {
      // console.log("hsl("+i+",100%,100%)")
      return "hsl(" + i + ",100%,50%)";
    },
    gethslBys(val, i) {
      // console.log("hsl("+i+",100%,100%)")
      return "hsl(" + val + "," + i + "%" + ",50%)";
    },
    gethslByl(val, i) {
      // console.log("hsl("+i+",100%,100%)")
      return "hsl(" + val + ",50%," + i + "%)";
    },
    gethslBysl(val, s, l) {
      // console.log("hsl("+i+",100%,100%)")
      return "hsl(" + val + "," + s + "%" + "," + l + "%)";
    },
    pick(e, ctx) {
      let x = e.layerX,
        y = e.layerY,
        pixel = ctx.getImageData(x, y, 1, 1),
        data = pixel.data;
      let rgb = [data[0], data[1], data[2]];
      this.fromRgbtoHsl(rgb);
    },
    fromRgbtoHsl(rgb) {
      let r = rgb[0],
        g = rgb[1],
        b = rgb[2];
      (r /= 255), (g /= 255), (b /= 255);

      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h,
        s,
        l = (max + min) / 2;

      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      this.hsl = {
        h: Math.floor(h * 360),
        s: Math.floor(s * 100) + "%",
        l: Math.floor(l * 100) + "%"
      };
      return (
        "hsl(" +
        Math.floor(h * 360) +
        "," +
        Math.floor(s * 100) +
        "%," +
        Math.floor(l * 100) +
        "%)"
      );
    },
    rePainter(val) {
      let ctx = this.ctx;
      // for(let i=1;i<=100;i++){
        let gradrow=ctx.createLinearGradient(0,0,300,0)
        for(let j=0;j<=100;j++){
          gradrow.addColorStop((j/100).toFixed(2),this.gethslBysl(val,j,100))
        }
        ctx.fillStyle=gradrow;
        ctx.fillRect(0, 0, 300, 300);
        ctx.stroke();
        gradrow=null
      // }
      // let grdX =ctx.createLinearGradient(0, 300, 300, 300);
      // for (let i = 1; i <= 100; i++) {
      //   grdX.addColorStop((i / 100).toFixed(4),this.gethslBys(val,i) );
      // }
      // ctx.fillStyle = grdX;

      // let grdY = ctx.createLinearGradient(0, 0, 300, 300);
      // for (let s = 0; s <= 100; s++) {
      //   grdY.addColorStop((s / 100).toFixed(2), this.gethslBysl(val, s,100-s));
      // }
      // ctx.fillStyle = grdY;
      ctx.fillRect(0, 0, 300, 300);
      ctx.stroke();
    }
  },
  watch: {
    // "hsl.h": function(oldVal, newVal) {
    //   if (oldVal != newVal) {
    //     this.rePainter(newVal);
    //   }
    // }
  },
  mounted() {
    this.initCanvas();
    console.log("iii")
    this.rePainter(33);
    this.canvas.onmousemove = () => {
      this.pick(event, this.ctx);
    };
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
  width: 50%;
  height: 300px;
  display: inline-block;
}
.hsl-container {
  // display: inline-block;
  float: right;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .hsl-container-top {
    width: 100%;
    height: 50px;
    background-color: pink;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .hsl-container-form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .hsl-item {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50px;
      padding: 0 8px;
      // margin:0 10px;
      input {
        width: 50px;
      }
    }
  }
}
</style>
