import React from 'react'

var Btns = ( props )=> {

    return (
        <div className="btns">
            <button
                className="btn btn-primary"
                onClick={ ()=> props.addItem( (new Date()).toLocaleString() ) }>添加</button>
            <button
                className="btn btn-danger"
                onClick={ ()=> props.clearItem() }>清空</button>
        </div>

    )
}


export default Btns
