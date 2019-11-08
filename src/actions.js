const ACTION_TYPES = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
    DESTROY: "destroy",
    TOGGLE_ALL: "toggle_all",
    FILTERED_SHOW: "filtered_show",
    CLEAR: "clear",
}

const ACTION_CREATORS = {
    addTodo: (action) => ({
        type: ACTION_TYPES.ADD_TODO,
        action
    }),
    toggleTodo: (id) => ({
        type: ACTION_TYPES.TOGGLE_TODO,
        id
    }),
    toggleAll: () => ({
        type: ACTION_TYPES.TOGGLE_ALL
    }),
    destroy: (id) => ({
        type: ACTION_TYPES.DESTROY,
        id
    }),
    filteredShow: (filter) => ({
        type: ACTION_TYPES.FILTERED_SHOW,
        filter
    }),
    clear: () => ({
        type: ACTION_TYPES.CLEAR
    })
}

export {
    ACTION_TYPES,
    ACTION_CREATORS
}