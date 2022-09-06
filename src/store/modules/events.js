export default {
    namespaced: true,
    state() {
        return {
            categories: [
                {
                    type: "U5 Girls",
                    selected: false,
                },
                {
                    type: "U5 Boys",
                    selected: false,
                },
                {
                    type: "U6 Girls",
                    selected: false,
                },
                {
                    type: "U6 Boys",
                    selected: false,
                },
                {
                    type: "U7 Girls",
                    selected: false,
                },
                {
                    type: "U7 Boys",
                    selected: false,
                },
                {
                    type: "U8 Girls",
                    selected: false,
                },
                {
                    type: "U8 Boys",
                    selected: false,
                },
                {
                    type: "U9 Girls",
                    selected: false,
                },
                {
                    type: "U9 Boys",
                    selected: false,
                },
                {
                    type: "U10 Girls",
                    selected: false,
                },
                {
                    type: "U10 Boys",
                    selected: false,
                },
                {
                    type: "U11 Girls",
                    selected: false,
                },
                {
                    type: "U11 Boys",
                    selected: false,
                },
                {
                    type: "U12 Girls",
                    selected: false,
                },
                {
                    type: "U12 Boys",
                    selected: false,
                },
            ],
        }
    },
    getters: {
        getCategories(state) {
            return state.categories;
        },
    },
    actions: {
        addCategories({ commit }, categories) {
            commit("setCategories", categories);
        },
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories;
        },
    }
}