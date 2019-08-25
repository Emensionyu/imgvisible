<template>
    <el-popover
    placement="top"
    width="200"
    trigger="click">
    <div class="report-suoluetu">
         <o-r :scale=".4" :object-relation='objectRelation'></o-r>
    </div>
    <div slot="reference">
        <o-r :scale=".2" :object-relation='objectRelationBlank'>
        </o-r>
    </div>
  </el-popover>
</template>
<script>
import oR from './o-r.vue'
export default {
    components:{
        oR
    },
    props:['objectRelation'],
    data(){
        return{
            // objectRelationData:this.objectRelation
        }
    },
  
    computed:{
        objectRelationBlank:function(){
            let templatedata=JSON.parse(JSON.stringify(this.objectRelation))
            for(let i=0;i<templatedata.length;i++){
                templatedata[i].name=''
            }
            return templatedata
        }
    }
}
</script>
<style lang="less">
.report-suoluetu{
    // width: 80px;
    height: 30px;

}
.el-popover{
    margin: 2px;
}

</style>
