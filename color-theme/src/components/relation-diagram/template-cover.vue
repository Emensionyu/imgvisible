<template>
    <div class="template-cover">
        <el-popover placement="top" trigger="hover">
            <div class="bi-obj-relation__bd" slot="reference">
                <relation-diagram :scale=".5" :layout="layout" :object-relation="objectRelation" ></relation-diagram>
                <div class="bi-choose-tpl-mask">
                    
                </div>
            </div>
        
            <relation-diagram  :object-relation="objectRelation" >
            </relation-diagram>
            
        </el-popover>
    </div>
</template>

<script>
// const relationDiagram = require('bi/modules/components/common/relation-diagram/relation-diagram')
import relationDiagram from './relation-diagram'
export default {
    name: 'template-cover',
    components: {
        relationDiagram
    },
    props: ['objectRelation'],
    data() {
        return {
            layout:'center'
        }
    }
}
</script>

<style lang="less">
.template-cover{
    width: 164px;
    height: 92px;
    border: 1px solid #eee;
}
.bi-obj-relation__bd {
   height: 100%;
}
</style>
