<template>
  <div id="app">
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      @test="test"/>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'app',
  methods: {
    test (param) {
      debugger
      console.log('param-->', param);
    }
  },
  components: {
    HelloWorld
  }
}
</script>