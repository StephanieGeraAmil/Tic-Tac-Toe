import React,{useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Message = () => {
    const {state}=useContext(GlobalContext)
    const {setWinner}=useContext(GlobalContext)
    const {disableBoard}=useContext(GlobalContext)
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ]
    useEffect(() => {  
        if(state.winner="none"){
            let winner=false
            //the state turn has changed already to the next one that has to move
            const lastTurn=state.turn==="X"?"O":"X"
            for (const jugada of wins) {
                const [a, b, c] = jugada.map(i => state.board[i])  
               if (a !== "." && b !== "." && c !== "."){
                  console.log(a,b,c)    
                  }
                if (a !== "." && a === b && b === c) {      
                    winner=true
                    console.log("tengo 3")  
                    setWinner(lastTurn)
                    disableBoard()     
                }
            }
            
            if(!winner&&(state.board.find(el=>el===".")===undefined)){
                 
                setWinner("tie")
                disableBoard()  
            }  
        } 
        }, [state.turn])
    
    return (
        <>
            {state.winner==="none" && <h3>Player {state.turn} , It's your turn!</h3>}
            {state.winner==="tie" && <h1>It's a tie!</h1>}
             {state.winner!=="none" && state.winner!=="tie" && <h1>Player {state.winner} Won!!!</h1>}
        </>
    )
}
