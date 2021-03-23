export function ADD_TODOLIST(state, nameList) {
    state.Lists.push({
        id: state.Lists.length+1,
        name: nameList
    });
}

export function SET_LISTS(state, data) {
    state.Lists = data;
}

export function ADD_TODO(state, data) {
    state.Lists[data.id].todos.push({
        id: state.Lists[data.id].todos.length+1,
        name: data.name,
        completed: data.completed,
        todolist_id: data.id
    })
}