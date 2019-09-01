<template>
    <div class="container">
        <div v-for="(item,index) in objRelations" :key="index">
            <relation-diagram :object-relation="item"></relation-diagram>
        </div>
    </div>
</template>
<script>
const relationDiagram=require('./relation-diagram')
export default {
  components: {
    relationDiagram
  },
  data() {
    return {
      objRelations: [
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
<style lang="less" >

</style>
