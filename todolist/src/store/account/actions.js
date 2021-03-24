import axios from 'axios'
import router from '../../router'

export function register({commit}, data) {
    axios
        .post("http://138.68.74.39/api/register?",{name: data.name, email: data.email, password: data.password})
        .then(function (response) {
            commit("SET_TOKEN", response.data)
            router.push("/")
        })
        .catch(function (error) {
            console.log(error) 
        })
} 

export function login({commit}, data) {
    axios
        .post("http://138.68.74.39/api/login?",{email: data.email, password: data.password})
        .then(function (response) {
            commit("SET_TOKEN", response.data)
            router.push("/")
        })
        .catch(function (error) {
            console.log(error)
        })
}

/*export function getUser({commit}, token) {
    axios
        .get("http://138.68.74.39/api/user", {
            headers: {
                'Authorization': 'Bearer ' + token.token
            }
        })
        .then(function (response) {
            commit("SET_USER_INFOS", response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}*/