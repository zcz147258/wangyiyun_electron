/*
 * @Descripttion:
 * @Author: mikasa
 * @Date: 2020-10-06 16:32:42
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/findmusic",
      component: require("@/view/index").default,
      children: [
        {
          path: "/findmusic",
          name: "findmusic",
          redirect:'/recommendation',
          component: () => import("@/view/findmusic"),
          children: [
            {
              path: "/recommendation",
              name: "recommendation",
              component: () => import("@/components/findmusic/recommendation"),
            },
            {
              path: "/songsheet",
              name: "songsheet",
              component: () => import("@/components/findmusic/songsheet"),
            },
            {
              path: "/station",
              name: "station",
              component: () => import("@/components/findmusic/station"),
            },
            {
              path: "/ranking",
              name: "ranking",
              component: () => import("@/components/findmusic/ranking"),
            },
            {
              path: "/singer",
              name: "singer",
              component: () => import("@/components/findmusic/singer"),
            },
            {
              path: "/lastmusic",
              name: "lastmusic",
              component: () => import("@/components/findmusic/lastmusic"),
            }
          ],
        },
        {
          path: "/download",
          name: "download",
          component: () => import("@/view/download"),
        },
        {
          path: "/collectionssheet",
          name: "collectionssheet",
          component: () => import("@/view/collectionssheet"),
        },
        {
          path: "/fmradio",
          name: "fmradio",
          component: () => import("@/view/fmradio"),
        },
        {
          path: "/friends",
          name: "friends",
          component: () => import("@/view/friends"),
        },
        {
          path: "/localmusic",
          name: "localmusic",
          component: () => import("@/view/localmusic"),
        },
        {
          path: "/mycollections",
          name: "mycollections",
          component: () => import("@/view/mycollections"),
        },
        {
          path: "/mydisk",
          name: "mydisk",
          component: () => import("@/view/mydisk"),
        },
        {
          path: "/songsheet",
          name: "songsheet",
          component: () => import("@/view/songsheet"),
        },
        {
          path: "/video",
          name: "video",
          component: () => import("@/view/video"),
        },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
