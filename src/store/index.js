import { createStore } from "vuex";
import user from "./modules/user";
import toast from "./modules/toast";
import student from "./modules/student";
import userList from "./modules/userList";
import events from "./modules/events";

export default createStore({
    modules: {
        user,
        toast,
        student,
        userList,
        events
    }
})