import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../pages/DashboardSDT.vue";
import Events from "../pages/EventsSDT.vue";
import Results from "../pages/ResultsSDT.vue";
import Admin from "../pages/AdminSDT.vue";
import Settings from "../pages/SettingsSDT.vue";
import Login from "../pages/LoginSDT.vue";
import Register from "../pages/RegisterSDT.vue";
import BasicUser from "../pages/BasicUser.vue";

import HighJumpEvent from "../pages/events/HighJumpEvent.vue";
import LongJumpEvent from "../pages/events/LongJumpEvent.vue";
import LongDistanceEvent from "../pages/events/LongDistanceEvent.vue";
import ShotputEvent from "../pages/events/ShotputEvent.vue";
import SprintsEvent from "../pages/events/SprintsEvent.vue";
import DiscusEvent from "../pages/events/DiscusEvent.vue";
import BallGamesEvent from "../pages/events/BallGamesEvent.vue";

import { getAuth } from "firebase/auth";
import store from "../store"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/Basic-user",
        name: "BasicUser",
        component: BasicUser
    },
    {
        path: "/Events",
        name: "Events",
        component: Events
    },
    {
        path: "/Results",
        name: "Results",
        component: Results
    },
    {
        path: "/Admin",
        name: "Admin",
        component: Admin,
        meta: { onlyAdminUser: true }
    },
    {
        path: "/Settings",
        name: "Settings",
        component: Settings,
        meta: { onlyAuthUser: true }
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
        meta: { onlyGuestUser: true }
    },
    {
        path: "/Register",
        name: "Register",
        component: Register,
        meta: { onlyGuestUser: true }
    },
    // Events
    {
        path: "/Events/High-Jump",
        name: "HighJumpEvent",
        component: HighJumpEvent
    },
    {
        path: "/Events/Long-Jump",
        name: "LongJumpEvent",
        component: LongJumpEvent
    },
    {
        path: "/Events/Long-Distance",
        name: "LongDistanceEvent",
        component: LongDistanceEvent
    },
    {
        path: "/Events/Shotput",
        name: "ShotputEvent",
        component: ShotputEvent
    },
    {
        path: "/Events/Sprints",
        name: "SprintsEvent",
        component: SprintsEvent
    },
    {
        path: "/Events/Discus",
        name: "DiscusEvent",
        component: DiscusEvent
    },
    {
        path: "/Events/Ball-Games",
        name: "BallGamesEvent",
        component: BallGamesEvent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    const isAuth = !!getAuth().currentUser;
    let isAdmin;
    try {
        isAdmin = store.getters['user/isAdmin']
    }
    catch(e) {
        isAdmin = false;
    }

    if (to.meta.onlyAuthUser) {
        if (isAuth) {
            next()
        } else {
            next({ name: "Login" })
        }
    } else if(to.meta.onlyAdminUser) {
        if(isAdmin) {
            next()
        }
        else {
            next({name: "BasicUser"})
        }
    } else if (to.meta.onlyGuestUser) {
        if (isAuth) {
            next({ name: "Dashboard" })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router

