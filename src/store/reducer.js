
import state from './state'
import {CREATE_NEW_TODO, CHNAGE_TODO_FINISH,REMOVE_TODO,ADD_TODO} from './const'

//previous代表当前的状态;
const reducer = ( previousState = state,action ) =>{
    //使用state作为默认状态;传给store
    let new_state = Object.assign({},previousState);

    switch (action.type) {
        case CREATE_NEW_TODO:
        //添加方法的位置
            new_state = handler.addNewTodoByTitle(new_state, action.title);
        break;
        case CHNAGE_TODO_FINISH:
        //添加方法的位置
            new_state = handler.changeTodoFinish(new_state,action.id)
        break;
        case REMOVE_TODO:
        //添加方法的位置
            new_state = handler.removeTodo(new_state, action.id);
        break;
        case ADD_TODO:
        //添加方法的位置
            new_state = handler.addTodo(new_state, action.id);
        break;
        default:
        break;
    }
    return new_state;
}

const handler = {
        addNewTodoByTitle ( state, title ) {
            console.log(state.id);
            ++state.id;
            state.todos.push({
                id : state.id,
                title,
                isFinished : false
            })
            return state
        },
        changeTodoFinish (state , id) {
            for(let i = 0;i<state.todos.length;i++){
                let item = state.todos[i]
                if(item.id === id){
                   item.isFinished = !item.isFinished
                    break;
                }
            }
            return state
        },
        removeTodo( state, id ){
            for(let i = 0;i<state.todos.length;i++){
                let item = state.todos[i]
                if(item.id === id){
                    state.todos.splice(i,1)
                    break;
                }
            }
            return state
        },
        addTodo( state, id ,title){
            for(let i = 0;i<state.todos.length;i++){
                let item = state.todos[i]
                if(item.id === id){
                    item.title = title
                    break;
                }
            }
            return state
        }

}

export default reducer;