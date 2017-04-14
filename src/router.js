// router, route the component
import HomePage from './pages/HomePage'
// vue
import Vue from 'vue'

// router
import VueRouter from 'vue-router'

// have to use router
Vue.use(VueRouter)

// router with history false
var router = new VueRouter({
  history: false
})

//
router.map({
  // home /
  '/': {
    component: HomePage
  }
})

export default router
