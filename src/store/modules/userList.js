import { db } from '../../db';
import { 
    doc, query, collectionGroup, getDocs, updateDoc
} from 'firebase/firestore';

export default {
    namespaced: true,
    state() {
        return {
            data: null,
            items: [],
            item: []
        }
    },
    actions: {
        async getUsers({ commit }) {
            const userQuery = query(collectionGroup(db, "users"));
            const snapshot = await getDocs(userQuery);

            const users = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data };
            })

            commit("setUsers", users);
        },
        async updateUser({commit, dispatch}, { data, onSuccess }) {
            const userRef = doc(db, "users", data.id);
            await updateDoc(userRef, data);
            commit("updateUser", data);
            dispatch("toast/success", "User '" + data.username + "' has been updated", { root: true });
            onSuccess();
        },
    },
    mutations: {
        setUsers(state, users) {
            state.items = users;
        },
        setUser(state, users) {
            state.item = users;
        },
        updateUser(state, user) {
            state.data = {
                ...state.data,
                ...user
            }
        }
    }
}