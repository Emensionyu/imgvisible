<template>
  <div>
      <li class="template-li"> 
          <template-cover  :object-relation="testData1"></template-cover>
            <div class="template-text">对象关系图</div>
      </li>
         <li class="template-li"> 
          <template-cover  :object-relation="testData2"></template-cover>
            <div class="template-text">对象关系图</div>
      </li>
        
        
  </div>
</template>

<script>
import templateCover from "./template-cover";

export default {
    
  components: {
    templateCover
  }
  ,
  data(){
      return{
         testData2 : [
  {
    name: "次对象",
    id: 1
  },
  {
    name: "主对象A",
    id: 2,
    targets: [1],
    core: true
  }

  //   {
  //     name: "次对象三",
  //     id: 5
  //     // targets: []
  //   },
  //   {
  //     name: "A6",
  //     id: 6,
  //     targets: [3]
  //   }
],

testData1 :[
  {
    name: "次对象",
    id: 1
  },
  {
    name: "主对象A",
    id: 2,
    targets: [1, 5],
    core: true
  },
  {
    name: "次对象一",
    id: 3,
    targets: [2]
  },
  {
    name: "次对象二",
    id: 4,
    targets: [3]
  },

  {
    name: "次对象三",
    id: 5
    // targets: []
  }
],
      }
  }
};
</script>
<style lang="less">
.template-li{
    float: left;
    margin-right: 10px;
    margin-bottom: 30px;
    width: 164px;
    position: relative;
    list-style: none;
}
.template-text{
    margin: 10px auto 0;
    text-align: center;
    height: 19px;
}
</style>