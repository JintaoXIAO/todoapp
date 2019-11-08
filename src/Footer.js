import React from 'react'
import {ALL, ACTIVE, COMPLETED} from './visibilityFilter'


let Footer = ({todos, clear, filter, filteredShow}) => <footer className="footer">
    <span className="todo-count"><strong>{todos.length}</strong>item left</span>
    <ul className="filters">
        <li>
            <a className={filter===ALL? "selected":""} href="#/" onClick={()=>filteredShow(ALL)}>All</a>
        </li>
        <li>
            <a className={filter===ACTIVE? "selected": ""} href="#/active" onClick={()=> filteredShow(ACTIVE)}>Active</a>
        </li>
        <li>
            <a className={filter===COMPLETED? "selected": ""} href="#/completed" onClick={()=>filteredShow(COMPLETED)}>Completed</a>
        </li>
        <button className="clear-completed" onClick={clear}>Clear completed</button>
    </ul>
</footer>

export default Footer
