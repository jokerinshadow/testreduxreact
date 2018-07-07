import React,{ Component } from 'react';
import TodoInput from './TodoInput';
import TodoContent from './TodoContent'

class TodoList extends Component{
    render(){
        return(
            <div className = 'todolist'>
                <h1>todolist.com</h1>
                <TodoInput></TodoInput>
                <hr/>
                <TodoContent></TodoContent>
            </div>
        )
    }

}

export default TodoList;