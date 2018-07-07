import React,{Component} from 'react'
import actionCreator from '../store/actionCreator'

class TodoInput extends Component {
    constructor(props){
        super(props)
        this.createNewTodo = this.createNewTodo.bind(this);
        
    }
    createNewTodo (e){
        //新增todo的方法
        if( e.keyCode === 13 )
        {
            let title = e.target.value;
            let action  = actionCreator.createNewTodo( title );
            this.$store.dispatch(action);        
            e.target.value = ''
        }
    }
    render(){
        return (
            <div >
                <input type = 'text'  className="form-control" onKeyUp = { this.createNewTodo }/>
            </div>
        )
    }
}

export default TodoInput;