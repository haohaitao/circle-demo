/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-01-27 16:07:12
 * @LastEditTime : 2021-01-27 17:04:27
 * @LastEditors  : pacino
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
