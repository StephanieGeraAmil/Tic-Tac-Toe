import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Square = ({pos}) => {
    const {playerX}=useContext(GlobalContext)
    const {playerO}=useContext(GlobalContext) 
    const {state}=useContext(GlobalContext)
 
   
    const checkIfDisabled=()=>{
  
        if(!state.disable && (state.board[pos-1]===".")){
         state.turn=='X'?playerX(pos-1):playerO(pos-1)
        }
    }
    return (
        <>
            <button  onClick={()=>checkIfDisabled()} className='square'>{state.board[pos-1]}</button>
        </>
    )
}
