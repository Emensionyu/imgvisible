<template>
  <div class="old-picker">
    <ul class="bi-property__select" v-if="!isNew">
      <li
        class="bi-property__select__item clearfixed"
        v-for="(item,index) in colorBoxData"
        :key="index"
        :class="{active:oldactive==index}" @click="oldactive=index"
      >
        <span class="bi-property__select__item__icon">
          <ul class="bi-color-cubes clearfixed">
            <color-box
              v-for="(color,index) in item.icon.colors"
              :key="index"
              :color="color"
              @select:color="handlerselectColor"
            ></color-box>
          </ul>
        </span>

        <span class="bi-property__select__item__label">{{item.title}}</span>
      </li>
    </ul>
    <ul class="bi-property__select" v-if="isNew">
      <li
        class="bi-property__select__item clearfixed"
        v-for="(item,index) in propColor"
        :key="index"
       
      >
        <span class="bi-property__select__item__icon">
          <ul class="bi-color-cubes clearfixed"  >
            <color-box
              v-for="(color,index) in item.icon.colors"
              :key="index"
              :color="color"
              @select:color="handlerselectColor"
            ></color-box>
          </ul>
        </span>

        <span class="bi-property__select__item__label">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
// const colorBox = require("./color-block");
import colorBox from './color-block'
export default {
  components: {
    colorBox
  },
  props:{
    isNew:{
      type:Boolean,
      default:false
    },
    propColor:{
      
    }
  },
  data() {
    return {
      newactive:0,
      oldactive:0,
      colorBoxData: [{
                    title: ("默认"),
                    val: 0,
                    icon: this.getColorGroupIcon(0)
                }, {
                    title: ("黎明"),
                    val: 1,
                    icon: this.getColorGroupIcon(1)
                }, {
                    title: ("午后"),
                    val: 2,
                    icon: this.getColorGroupIcon(2)
                }, {
                    title: ("黄昏"),
                    val: 3,
                    icon: this.getColorGroupIcon(3)
                }, {
                    title: ("水果硬糖"),
                    val: 4,
                    icon: this.getColorGroupIcon(4)
                }]
    };
  },
  methods: {
    getColorGroupIcon(val) {
      return {
        colors: this.getThemeConf(val).colors
      };
    },
    getThemeConf(val) {
      var result = {};
      //default-0 默认;dawn-1 黎明; afternoon-2 午后; dusk-3 黄昏 ;fruit-4糖果
      switch (val) {
        case 0:
          result = {
            colors: ["#55D0C6", "#FCC064", "#F57A66", "#6380D3", "#FF944C"]
          };
          break;
        case 1:
          result = {
            colors: ["#9bc5dd", "#0056be", "#10357e", "#e7403d", "#eabb9d"]
          };
          break;
        case 2:
          result = {
            colors: ["#104a57", "#91beae", "#685c79", "#ffce55", "#fa6a31"]
          };
          break;
        case 3:
          result = {
            colors: ["#0d1f4c", "#5b1286", "#96004d", "#cc3c12", "#f78f00"]
          };
          break;
        case 4:
          result = {
            colors: ["#7967e1", "#cfb0d0", "#ea4d35", "#242966", "#50bf95"]
          };
          break;
        case 5:
          result = {
            colors: ["#ffa250", "#ffe06c", "#6fdda0", "#60bcff", "#ff8497"]
          };
          break;
        default:
          break;
      }
      return result;
    },
    handlerselectColor(color) {
      // console.log(color);
      // debugger
      this.$emit('submit:oldcolor',color)
    }
  },
  watch:{
      colorData(val){
          this.colorBoxData=val
      }

  },
  mounted() {
    // console.log(this.colorData);
    // console.log(this.colorBoxData);
  }
};
</script>
<style lang="less">
.bi-property__select {
    min-width: 160px;
    padding: 0 !important;
}
.bi-property__select__item {
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    color: #545d66;
    font-size: 12px;
    // width: 256px;
}
.bi-property__select__item.active, .bi-property__select__item:hover {
    background-color: #f2f3f7;
}
.clearfixed, .fn-clear {
    zoom: 1;
}
.bi-property__select__item__icon .bi-property__select__item__label {
    margin-right: 12px;
    float: left;
    display: inline-block;
    // height: 100%;
    width: 162px;
}


 .bi-color-cubes {
    margin-top: 8px;
}
.bi-color-cubes__item {
    float: left;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: #55D0C6;
}
ul li {
  list-style: none;
}
</style>
