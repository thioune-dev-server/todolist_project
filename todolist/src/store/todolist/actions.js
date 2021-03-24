import axios from 'axios'

export function addTodolist({commit},data) {
    console.log(data.tokenStored.token)
    axios
       .post("http://138.68.74.39/api/todolist?", {name: data.name},{
            headers: {
                'Authorization': 'Bearer ' + data.tokenStored.token
            }
        })
        .then(function() {
            commit("ADD_TODOLIST", data.name)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function loadTodoList({commit}, tokenStored) {
    axios.get("http://138.68.74.39/api/todolists", {
        headers: {
            'Authorization' : 'Bearer ' + tokenStored.token
        }
    })
    .then(function(response) {
        commit("SET_LISTS", response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
}

export function createTodo({commit}, data) {
    commit("ADD_TODO", data)
    axios.post("http://138.68.74.39/api/todo?", {name: data.name, completed: data.completed, todolist_id: data.id}, {
        headers: {
            'Authorization' : 'Bearer ' + data.tokenStored.token
        }
    })
    .then(function() {
        
    })
    .catch(function (error) {
        console.log(error)
    })
}

export function completeTodo({commit}, data) {
    axios.post("http://138.68.74.39/api/completeTodo/"+data.todoId+"?", {name: data.name, completed: data.completed, todolist_id: data.id}, {
        headers: {
            'Authorization' : 'Bearer ' + data.tokenStored.token
        }
    })
    .then(function() {
        commit("COMPLETE_TODO", data.todoId)
    })
    .catch(function (error) {
        console.log(error)
    })
}

export function deleteTodo({commit}, data) {
    commit("DELETE_TODO", data.id)
    axios.post("http://138.68.74.39/api/todo/"+data.id, {
        headers: {
            'Authorization' : 'Bearer ' + data.tokenStored.token
        }
    })
    .then(function() {
        
    })
    .catch(function (error) {
        console.log(error)
    })
}

export function modifyTodo({commit}, data) {
    axios.post("http://138.68.74.39/api/todo/"+data.todoId+"?",{name: data.name}, {
        headers: {
            'Authorization' : 'Bearer ' + data.tokenStored.token
        }
    })
    .then(function() {
        commit("MODIFY_TODO", data)
    })
    .catch(function (error) {
        console.log(error)
    })
}
