import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Restart = () => {
     const {reset}=useContext(GlobalContext)
    return (
        <>
            <button onClick={()=>reset()} className='restart'>
                Restart
            </button>
        </>
    )
}
