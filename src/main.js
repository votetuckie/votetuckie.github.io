// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
Vue.use(Router)
// eslint-disable-next-line
import twky from './assets/css/twky.css'
// eslint-disable-next-line
import index from './assets/css/index.css'

Vue.config.productionTip = false

Vue.component('card', {
  props: ['header', 'type'],
  template: `        
      <div class="card">
          <div class="card-head" v-if="header" 
          v-bind:style="{'card-head-soft': type == 'soft', 'card-head-bordered': type == 'bordered'}">
              {{header}}
          </div>
          <div class="card-body">
              <slot></slot>
          </div>
      </div>`
})


import About from './routes/About'
import Portfolio from './routes/Portfolio'

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
