import React from 'react'



let clearInput = (inputRef) => {
    inputRef.value = ''
}

let Header = ({addTodo}) =>{
    let inputRef = React.createRef
return <header className="header">
    <h1>todos</h1>
    <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus={true}
        ref={ref => inputRef = ref}
        onKeyDown={evt => {
            if(evt.key === 'Escape'){
                clearInput(inputRef)
            }
            if(evt.key === 'Enter'){
                addTodo(evt.target.value)
                clearInput(inputRef)
            }
        }}/>
</header>
}

export default Header