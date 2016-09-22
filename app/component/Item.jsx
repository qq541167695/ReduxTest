import React from 'react'

export default ( props )=> {

    return (
        <li>
            { props.children }
            <button className="btn btn-danger" onClick={ props.removeItem  }>x</button>
        </li>
    )
}
