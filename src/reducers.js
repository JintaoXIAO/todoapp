import {ACTION_TYPES} from './actions'
import {combineReducers} from 'redux'
import {ALL} from './visibilityFilter'

const {TOGGLE_ALL, TOGGLE_TODO, DESTROY, ADD_TODO, FILTERED_SHOW, CLEAR} = ACTION_TYPES

const todos = (todos=[], action) => {
    switch(action.type){
        case TOGGLE_ALL:
            return todos.map(todo => ({...todo, completed: !todo.completed}))
        case TOGGLE_TODO:
            return todos.map(todo => 
                (todo.action === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        case DESTROY:
            let idx = todos.find(todo => todo.action === action.action)
            todos.splice(idx,1)
            return [...todos]
        case ADD_TODO:
            if(todos.find(todo=> todo.action === action.action)){
                return todos
            }
            
            return [
                ...todos,
                {
                    action: action.action,
                    completed: false
                }
            ]
        case CLEAR:
            return todos.filter(todo => !todo.completed)
        default:
    }
    return todos
}

const filter = (filter=ALL, action) => {
    if(action.type === FILTERED_SHOW){
        return action.filter
    }
    return filter
}

let rootReducer = combineReducers({
    todos,
    filter
})

export default rootReducer