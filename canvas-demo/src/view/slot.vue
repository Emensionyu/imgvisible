<template>
    <div>
        <slot-e> 
            <template v-slot:itemObject="itemObjectprop">
             <span>{{itemObjectprop.checked}}</span>
            </template>
           
        </slot-e>
    </div>
</template>
<script>
import slotE from '@/component/slotE'
export default {
    components:{
        slotE
    }
    
}
</script>
