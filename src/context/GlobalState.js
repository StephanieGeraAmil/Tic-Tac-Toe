import React,{createContext, useReducer } from "react"
import AppReducer from './AppReducer.js'
//initial state

const initialState={
disable: false,
winner: "none",
turn: "X",
board:[  '.','.','.',
       '.','.','.',
       '.','.','.']
       }


//create context
export const GlobalContext = createContext(initialState)
     

//provider component
export const GlobalProvider = ({children})=>{ 
    const [state, dispatch]= useReducer(AppReducer, initialState)
   

    //actions
 
    const playerX=(pos)=>{
        dispatch({
            type: 'ADD_X',
            payload: pos
            });
    }
    const playerO=(pos)=>{
        dispatch({
            type: 'ADD_O',
            payload: pos
            });
    }
    const reset=()=>{
        dispatch({
            type: 'RESET' , 
            payload: [  '.','.','.',
       '.','.','.',
       '.','.','.']
            });
    }
    const setWinner=(winner)=>{
        dispatch({
            type: 'WINNER' , 
            payload: winner
            });
    }
    const disableBoard=()=>{
        dispatch({
            type: 'DISABLE' 
            });
    }
    return(
        <GlobalContext.Provider value={{state,playerX,playerO,reset,setWinner,disableBoard}}>
            {children}
        </GlobalContext.Provider>
    )
}
