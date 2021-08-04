
export default(state, action)=>{

    switch(action.type){
        case 'ADD_X':
        return{
         ...state,
        state: state.board[action.payload]='X',
        turn: "O"
        }
        case 'ADD_O':
        return{
         ...state,
        state: state.board[action.payload]='O', 
        turn: "X"
        }
        case 'RESET':
        return{
        ...state,
        disable: false,
        board: action.payload,
        turn: "X",
        winner: "none"
        }
        case 'WINNER':
        return{
        ...state,
        winner: action.payload
        }
        case 'DISABLE':
        return{
        ...state,
        disable:true
        }
        default:  return state
    }
}

// how a state changes in response of an action