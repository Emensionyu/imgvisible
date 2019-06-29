<template>
<div class="con">
     <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <base-checkbox checked="true"></base-checkbox>
</div>
    
    <!-- <input v-model="searchText"> -->
</template>


<script>
import baseCheckbox from './base-checkbox'

export default {
    props:['value'],
    components:{baseCheckbox}

}
</script>

