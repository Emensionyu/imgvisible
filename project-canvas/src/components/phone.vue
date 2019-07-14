<template>
    <div>
        <!-- <input type="text" v-model="datanumber"> -->
        <!-- v-model 语法糖 -->
        <input type="text" :value="number" @input="handleChange">
        
        <!-- <input type="text" :value="mail" @input="handleChangemail"> -->
    </div>
</template>
<script>
export default {
  model: {
    prop: "number",
    event: "change"
  },
  props: ["number", "mail"],
  // props:['info'],
  data() {
    return {
    //   datainfo: this.info
    datanumber:this.number
    };
  },
  watch:{
      number(val){
          console.log(val)
      }
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
      //emit 回调
    //  let res= this.$emit("change", e.target.value,val=>{console.log(val)});
    //  console.log("emit发生了"+res,res==this)

    },
    handleChangemail(e) {
      this.$emit("changemail", e.target.value);
    }
  }
};
</script>