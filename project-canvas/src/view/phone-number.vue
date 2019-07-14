<template>
  <div>
    <!-- <phone :number="number"></phone> -->
    <!-- <phone :mail="mail"
            @changemail="val=>{this.mail=val}"
    ></phone>-->
    <phone :number="number" @change="numberChange"></phone>
    <!-- <phone v-model="number"></phone> -->
    <div>number:{{number}}</div>
    <div>mail:{{mail}}</div>
    <!-- 使用静态key 遍历组件不要使用key -->
    <div class="keydemo">
      <A v-for="key in list" :key="key">
        <button @click="()=>handleDelect(key)">删除</button>
      </A>
      <button @click="handleAdd">添加</button>
    </div>
    <div class="timeout">
      {{fullname}}
      <div>firstname:
        <input v-model="firstname">
      </div>
      <div>
        lastname:
        <input v-model="lastname">
      </div>
    </div>
  </div>
</template>
<script>
import phone from "@/components/phone.vue";
import A from "@/components/A.vue";
let key = 1;
export default {
  components: {
    phone,
    A
  },
  data() {
    return {
      number: 1001,
      mail: 28333,
      list: [],

      firstname:'',
      lastname:'',
      fullname:'',

    };
  },
  watch:{
    // input输入框500ms防抖
    firstname:function(val){
      clearTimeout(this.firsTimeout);
      this.firsTimeout=setTimeout(()=>{
        this.fullname=val+""+this.lastname
      },5000)
    },
    lastname:function(val){
      clearTimeout(this.lastTimeout);
      this.lastTimeout=setTimeout(()=>{
        this.fullname=this.firstname+""+val
      },500)
    }
  },
  methods: {
    numberChange(val, callback) {
      this.number = val;
      callback("hello"); //执行callback
      return "hahaha"; //改变this.emit 的值 本来时this
    },
    handleAdd() {
      this.list.push(key++);
    },
    handleDelect(key) {
      const index = this.list.findIndex(k => k == key);
      this.list.splice(index, 1);
    }
  }
};
</script>