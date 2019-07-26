<template>
  <div>
    <div class="crm-components-signature">
      <canvas
        ref="canvas"
        class="signature-canvas"
        :height="height"
        :width="width"
        @mousedown="beginDraw"
        @mouseup="endDraw"
        @mousemove="drawing"
      ></canvas>
      <div class="c-clean j-c-clean" @click="clean">清除</div>
      <div class="c-clean j-c-upload" @click="upload">上传</div>
    </div>
  </div>
</template>

<script>
import qiuniuConfig from "../config/myconfig";
export default {
  data() {
    return {
      canvas: "",
      ctx: null,
      height: 300,
      width: 600,
      opts: {
        width: 600,
        height: 300,
        backgroud: "#fff",
        color: "#333",
        blurUpload: true,
        change: null
      },
      mousePress: false,
      lastPos: null,
      hasChange: false
    };
  },
  methods: {
    initCanvas() {
      this.render();
    },
    //打开窗口显示绘制图片
    render() {
      this.canvas = this.$refs.canvas;
      //背景
      this.ctx = this.canvas.getContext("2d");
      this.ctx.lineWidth = 4;
      this.ctx.strokeStyle = this.opts.color;
      this.fillBackground();
      //   data && this.setValue(data);
    },
    fillBackground: function() {
      var opts = this.opts;
      this.ctx.fillStyle = opts.backgroud;
      this.ctx.fillRect(0, 0, opts.width, opts.height);
    },
    beginDraw: function() {
      this.mousePress = true;
      console.log(this.mousePress);
    },
    endDraw: function(e) {
      if (!this.mousePress) return;

      this.mousePress = false;
      this.lastPos = null;
      //   this.trigger("change");
      return false;
    },
    drawing: function(e) {
      if (!this.mousePress) return;
      var lastPos = this.lastPos;
      if (lastPos) {
        this.ctx.beginPath();
        this.ctx.moveTo(lastPos.x, lastPos.y);
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
      }
      this.lastPos = {
        x: e.offsetX,
        y: e.offsetY
      };
      this.hasChange = true;
      return false;
    },
    clean: function() {
      var opt = this.opts;
      this.ctx.clearRect(0, 0, opt.width, opt.height);
      this.signData = null;
      this.mousePress = null;
      this.lastPos = null;
      this.fillBackground();
    },
    dataURLtoBlob: function(dataURL) {
      var arr = dataURL.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: "image/jpeg"
      });
    },
    upload: function() {
      var me = this;
      console.log(this.canvas.toDataURL());
      var blob = this.dataURLtoBlob(this.canvas.toDataURL());
      var bloburl = window.URL.createObjectURL(blob);
      let imageData = this.ctx.getImageData(0, 0, 150, 300);
      //   var imgurl = window.URL.createObjectURL(imageData);
      this.ctx.putImageData(imageData, 200, 300);
      var req = {
        data: blob,
        type: "post",
        dataType: "json",
        processData: false,
        headers: {
          "Content-type": "application/octet-stream",
          extension: "jpg"
        }
      };
      this.uploadToqiu();
      //   me.xhr && me.xhr.abort();
      //   me.xhr = $.ajax(FS.BASE_PATH + "/FSC/EM/File/UploadByStream", req)
      //     .done(function(res) {
      //       var temp = {
      //         ext: res.FileExtension,
      //         path: res.TempFileName
      //       };
      //       me.hasChange = false;
      //       me.signData = temp;
      //       me.options.change && me.options.change(temp);
      //     })
      //     .complete(function() {
      //       me.xhr = null;
      //     });
    },
    getValue: function() {
      return this.signData && [this.signData];
    },
    // uploadToqiu() {
    //   var accessKey = qiuniuConfig.accesskey;
    //   var secretKey = qiuniuConfig.secretKey;
    //   var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    //   var options = {
    //     scope: bucket
    //   };
    //   var putPolicy = new qiniu.rs.PutPolicy(options);
    //   var uploadToken = putPolicy.uploadToken(mac);
    // }
  },

  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="less">
.crm-components-signature {
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 600px;
  height: 300px;
  .signature-canvas {
    cursor: url("../assets/signature.png"), default;
  }
  .c-clean {
    position: absolute;
    right: 4px;
    top: 4px;
    cursor: pointer;
    color: #eee;
    &:hover {
      color: #3e84e9;
    }
  }
  .j-c-upload {
    margin-top: 20px;
    color: pink;
    //   background-color: blue;
  }
}
</style>

