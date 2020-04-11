import {createStore} from 'redux'

const initialState = 0


//reducer
function counter (state = initialState , action) {
    console.log(action)

    if(action.type==='INCREMENT'){
        return state +1
        }
        return state
}


const store = createStore(counter)

console.log(store.getState())

//action
store.dispatch({
    type:'INCREMENT'
})

console.log(store.getState())

export default store