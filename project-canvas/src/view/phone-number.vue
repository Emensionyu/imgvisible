<template>
    <div>
            <phone :number="number"></phone>
        
            <!-- <phone :mail="mail"
            @changemail="val=>{this.mail=val}"
            ></phone> -->
        <div>number:{{number}}</div>
         <div>mail:{{mail}}</div>
    </div>
</template>
<script>
import phone from '@/components/phone.vue'
export default {
    components:{
        phone,
    },
    data(){
        return{
            number:1001,
            mail:28333
        }
    },
    methods: {
        numberChange(val){
            this.number=val
        }
    },
}
</script>