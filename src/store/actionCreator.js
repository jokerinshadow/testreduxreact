
import { CREATE_NEW_TODO , CHNAGE_TODO_FINISH,REMOVE_TODO, ADD_TODO} from './const'

const actionCreator = {
    createNewTodo (title) {
        let action  =  { type : CREATE_NEW_TODO,title}
        return action
    },
    changeTodoFinish (id) {
        let action = { type: CHNAGE_TODO_FINISH,id }
        return action
    },
    removeTodo(id) {
        let action = {type: REMOVE_TODO,id}
        return action
    },
    addTodo(id,title) {
        let action = {type:ADD_TODO,id,title}
        return action
    }

}

export default  actionCreator;