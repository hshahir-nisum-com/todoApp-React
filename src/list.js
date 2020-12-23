import React from 'react'
import './styleList.css'

export default function list({todos,func}) {
    
    return (
        <div>
            <ul className="ul">
                
                {
                    todos.map((value,key)=>{
                        value === ''? value = null : value = value
                        if (value !=null){
                    return ( <li className="list" key={key}>{value}
                            <input type="button"className="dltBtn" value="delete" onClick={
                                ()=>{
                                    func(value)
                                }
                            } /> 
                        </li>)
                        }
                    })
                }
            </ul>
        </div>
    )
}
