import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "/@/components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/helloworld",
    },
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("/@/components/About.vue")
    },
    {
        path: "/about2",
        name: "About2",
        component: () => import("/@/components/About2.vue")
    },
    {
        path: "/about3",
        name: "About3",
        component: () => import("/@/components/About3.vue")
    },
    {
        path: "/about4",
        name: "About4",
        component: () => import("/@/components/About4.vue")
    },
    {
        path: "/about5",
        name: "About5",
        component: () => import("/@/components/About5.tsx")
    },
    {
        path: "/new",
        name: "New",
        component: () => import("/@/components/new.tsx")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;