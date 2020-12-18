import Vue from "vue";
import VueRouter from "vue-router";
import NanjingMap from "@/views/NanjingMap";

const Home = () => import("../views/Home.vue");
const MetroLines = () => import("../views/MetroLines.vue"); //地铁信息
const NanjingMetroLine = () => import("../views/NanjingMetroLine.vue");
const NanjingMetroRoutePlanning = () =>
  import("../views/NanjingMetroRoutePlanning.vue");
const Maze = () => import("../views/Maze.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/location",
    children: [
      {
        path: "/location",
        component: NanjingMap,
      },
      {
        path: "/metroLines",
        component: MetroLines,
      },
      {
        path: "/nanjingmetroline",
        component: NanjingMetroLine,
      },
      {
        path: "/nanjingmetrorouteplanning",
        component: NanjingMetroRoutePlanning,
      },
      {
        path: "/migong",
        component: Maze,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
