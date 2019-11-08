import React from 'react'

import {filterTodos} from './visibilityFilter'

let TodoList = ({todos, filter,toggleAll, toggle, destroy}) => <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
        {
            
            filterTodos(todos,filter).map(todo => <li className={todo.completed? "completed" : ""} key={todo.action}>
                <div className="view">
                    <input 
                        key={todo.action} 
                        className="toggle" 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={()=> toggle(todo.action)}/>

                    <label>{todo.action}</label>

                    <button 
                        className="destroy" 
                        onClick={() => {
                            destroy(todo.action)}
                        }/>
                </div>
            </li>)
        }
    </ul>
</section>

export default TodoList