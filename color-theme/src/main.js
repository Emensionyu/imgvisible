// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
    // import Vue from 'vue'
    // import App2 from './App2.vue'
    // Vue.mixin({
    //     data() {
    //         console.log(`${this.$options.name}:data(from Mixin )`)
    //         return {
    //             name: 'Mixin2'
    //         }
    //     },
    //     beforeCreate() {
    //         console.log(`${this.name}:beforeCreate(from mixin)`)
    //     },
    //     mounted() {
    //         console.log(`${this.name}:mounted (from  ${this.from()})`)
    //     },
    //     methods: {
    //         from() {
    //             return 'Mixin3'
    //         }
    //     },
    // })
    // new Vue({
    //     name: 'Root1',
    //     data() {
    //         console.log('Root:data (from Root)')
    //         return {
    //             name: 'Root2',
    //         }
    //     },
    //     mounted() {
    //         console.log('Root:mounted (from Root)')
    //     },
    //     methods: {
    //         from() {
    //             return 'Root3'
    //         }
    //     },
    //     render: h => h(App2),
    // }).$mount('#app')