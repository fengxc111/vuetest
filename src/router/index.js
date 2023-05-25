import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/IndexView.vue"),
  },
  {
    path: "/",
    name: "系统",
    component: () =>
      import("../views/layout/IndexView.vue"),
    redirect:"/home",
    children:[
      {
        path: "/home",
        name: "首页",
        component: () =>
          import("../views/home/IndexView.vue"),
      },
      {
        path: "/typeone",
        name: "设备信息",
        component: () =>
          import("../views/typeone/IndexView.vue"),
      },
      {
        path: "/typetwo",
        name: "维修人员信息",
        component: () =>
          import("../views/typetwo/IndexView.vue"),
      },
      {
        path: "/changepw",
        name: "修改密码",
        component: () =>
          import("../views/changepw/IndexView.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
