import React,{ Component } from 'react';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    renderItems() {
        let {todos} = this.props;
        return todos.map(item =>  <TodoItem key = {item.id} data = {item}/>)
    }
    render(){
        
        let {title, todos} = this.props;
        return (
            <div className='todoitemlist'>
                <h5>{title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='label label-default' style = {{color:'red'}}>{ todos.length }</span></h5>
                <ul className = 'list-group'>
                    {this.renderItems()}
                </ul>
            </div>
        )

    }

}

export default TodoItemList;