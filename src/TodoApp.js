import React, {Component} from 'react'
import Header from './Header'
import TodoList from './TodoList'
import {ACTION_CREATORS} from './actions'
import {connect} from 'react-redux'
import Footer from './Footer'


class TodoApp extends Component {

    render = () => <>
        <section className="todoapp">
            <Header addTodo={this.props.addTodo}/>
            <TodoList 
                filter={this.props.filter}
                todos={this.props.todos} 
                toggle={this.props.toggle} 
                toggleAll={this.props.toggleAll}
                destroy={this.props.destroy}/>
            <Footer 
                todos={this.props.todos}
                filter={this.props.filter}
                filteredShow={this.props.filteredShow}
                clear={this.props.clear}/>
        </section>
        <footer className="info">
            <p>Double-click to edit a todo</p>
        </footer>
    </>
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    filter: state.filter
})

const {addTodo, toggleTodo, toggleAll, destroy, filteredShow, clear} = ACTION_CREATORS

const mapDispatchToProps = (dispatch) => ({
    addTodo: (action) => dispatch(addTodo(action)),
    toggle: (id) => dispatch(toggleTodo(id)),
    toggleAll: () => dispatch(toggleAll()),
    destroy: (id) => dispatch(destroy(id)),
    filteredShow: (filter) => dispatch(filteredShow(filter)),
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
