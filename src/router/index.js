import Vue from 'vue'
import Router from 'vue-router'

/*import SelectCity from "@/modules/Home/SelectCity"
import Class from "@/modules/Product/Class"
import Detail from "@/modules/Product/Detail"*/
import SouYe from "@/modules/Home/SouYe"
import Detail from "@/modules/Home/Pdetail"
import GoodsList from "@/modules/Home/GoodsList"
import Login from "@/modules/User/Login"
import Home from "@/modules/Home/Home"
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/selectCity',
      name: 'selectCity',
      component: SelectCity
    },
     {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },*/
    {
      path:'/souYe',
      name:'souYe',
      component:SouYe
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:"/detail",
      name:'detail',
      component:Detail
    },
    {
      path:"/goodsList",
      name:'goodsList',
      component:GoodsList
    },

    {
      path: '*',
      component: {template:"<div>404</div>"}
    }
  ]
})
