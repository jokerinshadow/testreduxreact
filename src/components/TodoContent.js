import React,{Component} from 'react';
import TodoItemList from './TodoItemList'

// import store from 太麻烦，直接挂载载原型上使用;

class TodoContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos : this.$store.getState().todos
        }
       
        this.$store.subscribe(() =>{
            this.setState({
                todos: this.$store.getState().todos
            })
             
        })
    }
    renderList (){ //划分todo，并且将其分别渲染
        let {todos} = this.state;
        //已完成的/未完成的
        let finishedTodos = todos.filter(item => item.isFinished)
        let unfinishedTodos = todos.filter(item => !item.isFinished)

        return (
            <div>
                <TodoItemList todos = {unfinishedTodos} title = {'正在进行'}></TodoItemList> 
                <TodoItemList todos = {finishedTodos} title = {'已完成'}></TodoItemList>
             </div>
        )
    }
    render(){
        return(
            <div className = 'todocontent'>
                {this.renderList()}
            </div>

        )

    }
}

export default TodoContent;