<template>
    <div class="container">
        <div class="report-style-wrapper" v-for="(item,index) in list" :key="index">
            <report-style :object-relation="item"></report-style>
        </div>
    </div>
</template>
<script>
import reportStyle from "./report-style";
export default {
  components: {
    reportStyle
  },
  data() {
    return {
      list: [
        [
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
          },
          {
            name: "A6",
            id: 6,
            targets: [3]
          }
        ],
         [
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
          },
          {
            name: "A6",
            id: 6,
            targets: [3]
          }
        ]
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.report-style-wrapper {
  // display: flex;
  position: relative;
  width: 100px;
  height: 30px;
  margin-right: 20px;
}
</style>
