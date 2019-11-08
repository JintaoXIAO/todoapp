const ALL = "all"
const ACTIVE = "active"
const COMPLETED = "completed"


const filterTodos = (todos, filter) => {
    switch(filter){
        case ALL:
            return todos
        case ACTIVE:    
            return todos.filter(todo=> !todo.completed)
        case COMPLETED:
            return todos.filter(todo=>todo.completed)
        default:

    }
    return todos
} 
export {ALL, ACTIVE, COMPLETED, filterTodos}

