import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import OtherPage from '../views/OtherPage.vue';
import OtherPage2 from '../views/OtherPage2.vue';
import OtherPage3 from '../views/OtherPage3.vue';


const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: '/main',
        component: Main
      },
      {
        path: '/otherPage',
        component: OtherPage
      },
      {
        path: '/otherPage2',
        component: OtherPage2
      },
      {
        path: '/otherPage3',
        component: OtherPage3
      }
    ]
  }
]

export default new VueRouter({
  routes
});
