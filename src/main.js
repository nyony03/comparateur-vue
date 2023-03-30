import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        // état initial de l'application
        count: 0,
        token: localStorage.getItem('token') || '',
        isConnected: false,
        message: '',
        error: false
    },
    actions: {
        // fonctions asynchrones qui appellent les mutations
    },
    mutations: {
        increment(state) {
            state.count++
        },
        saveToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        deleteToken() {
            localStorage.removeItem('token')
        },
        setIsConnected(state, value){
            state.isConnected = value
        },
        setErrorSuccessMessage(state, value){
            state.message = value
        },
        setError(state, value){
            state.error = value
        }
    },
    getters: {
        // fonctions qui récupèrent des données de l'état de l'application
        getToken: state => state.token,
        getIsConnected: state => state.isConnected,
        getErrorSuccessMessage: state => state.message
    }
})

createApp(App).use(store).use(router).mount('#app')



