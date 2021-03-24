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
    state.Lists[data.id-1].todos.push({
        id: state.Lists[data.id-1].todos.length+1,
        name: data.name,
        completed: data.completed,
        todolist_id: data.id
    })
}

export function DELETE_TODO(state,id) {
    state.Lists[0].todos.splice(id, 1)
}