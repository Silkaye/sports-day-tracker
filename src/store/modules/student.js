import { db } from '../../db';
// import { 
//     getDocs, getDoc, doc, addDoc,
//     query, where, 
//     collectionGroup, collection 
// } from 'firebase/firestore';
import { 
    addDoc, collection, setDoc, doc, query, collectionGroup, getDocs, deleteDoc, updateDoc
} from 'firebase/firestore';
//import slugify from 'slugify';

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
        async getStudents({ commit }) {
            const exchangeQuery = query(collectionGroup(db, "students"));
            const snapshot = await getDocs(exchangeQuery);

            const students = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data };
            })

            commit("setStudents", students);
        },
        async addStudent({ dispatch }, { data, onSuccess }) {
            let id;
            await addDoc(collection(db, "students"), data).then(function(docRef) {
                id = docRef.id
            })

            data.id = id

            await setDoc(doc(db, "students", id), data)

            dispatch("toast/success", "Student was added successfully", { root: true })
            onSuccess();
        },
        async deleteStudent({ dispatch }, { id, onSuccess }) {
            
            await deleteDoc(doc(db, "students", id));

            dispatch("toast/success", "Student was deleted successfully", { root: true })
            onSuccess();
        },
        async updateStudent({commit, dispatch}, { data, onSuccess }) {
            const userRef = doc(db, "students", data.id);
            await updateDoc(userRef, data);
            commit("updateStudent", data);
            dispatch("toast/success", "Student has been updated", { root: true });
            //console.log(onSuccess)
            onSuccess();
        },
    },
    mutations: {
        setStudents(state, students) {
            state.items = students;
        },
        setStudent(state, student) {
            state.item = student;
        },
        updateStudent(state, student) {
            state.data = {
                ...state.data,
                ...student
            }
        }
    }
}