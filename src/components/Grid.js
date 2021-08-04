import React,{useContext} from 'react'
import { Square } from './Square'
import { GlobalContext } from '../context/GlobalState'

export const Grid = () => {
    

   
    return (
      <table className='grid'>
            <tbody>
                <tr>
                    <td><Square pos='1'/></td>
                    <td><Square pos='2'/></td>
                    <td><Square pos='3'/></td>
                </tr>
                <tr>
                    <td><Square pos='4'/></td>
                    <td><Square pos='5'/></td>
                    <td><Square pos='6'/></td>
                </tr>
                <tr>
                    <td><Square pos='7'/></td>
                    <td><Square pos='8'/></td>
                    <td><Square pos='9'/></td>
                </tr>
            </tbody>
        </table>
    )
}
