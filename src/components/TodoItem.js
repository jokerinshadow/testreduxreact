import React,{ Component } from 'react'
import actionCreator from '../store/actionCreator';

class TodoItem extends Component {
    constructor(props){
        super(props);
      this.changeFinish = this.changeFinish.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
      this.titleBlur = this.titleBlur.bind(this);
      this.titleClick = this.titleClick.bind(this);
      this.state = {
          showTitleInput:false
      }
    }
    changeFinish(){
        let todo_id = this.props.data.id;
        let action = actionCreator.changeTodoFinish(todo_id)
        this.$store.dispatch(action)
    }
    removeTodo(){
        console.log("haha")
        let todo_id = this.props.data.id;
        let action = actionCreator.removeTodo(todo_id);
        this.$store.dispatch(action)
    }
    titleBlur(e){
        let title = e.target.value;
        if(title === this.props.data.title) return false;
        let todo_id = this.props.data.id;
        let action = actionCreator.addTodo(todo_id,title);
        this.$store.dispatch(action);
    }
    titleClick(){
        this.setState({
            showTitleInput:!this.state.showTitleInput
        })
    }
    render(){
        let { isFinished ,title} = this.props.data;
        return(
            <li className = 'li' style = {{marginTop:'20px'}}> 
                <p className = 'todoitem list-group-item pull-left'>
                    <input type = 'checkbox' defaultChecked = { isFinished } onChange = {this.changeFinish}/> 
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                     { this.state.showTitleInput ? (<input type = 'text' defaultValue = {title} onBlur = {this.titleBlur}/>)  :    (<span onClick = {this.titleClick}> {title} </span> ) }
                      
                </p>
                <button type='button'   className='close' onClick = {this.removeTodo}>close</button>
            </li>
        )
    }

}

export default TodoItem;