<template>
  <div>
    <color-picker :max-value="max" :min-value="min" @select="handleSubmit"></color-picker>
  </div>
</template>

<script>
// const colorPicker = require('./color-picker');
import colorPicker from "./color-picker";
export default {
  components: {
    colorPicker
  },
  data() {
    return {
      val: [] || "",
      max: 20,
      min: 0
    };
  },
  methods: {
    handleSubmit(val) {
      this.val = val;
      console.log(val);
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.maxValue = 300;
    // }, 2000);

    // this.colorPicker=new colorPicker({
    //     maxValue:200,
    //     minValue:0

    // }).$mount()

    // this.colorPicker.$on('select',( val)=>{
    //     this.val = val;
    //     console.log("val"+val)
    // })
  }
};
</script>
