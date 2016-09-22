import React from 'react'

import Item from './Item'

var Items = ( props )=> {
    var _items = props.items.map( (el,ix)=>{
        //过滤
        if( ''!==props.filterItem && el.indexOf( props.filterItem )<0 )
            return '';

        return (
            <Item
                key={ ix }
                removeItem={ ()=> props.removeItem( ix ) } >

                { el }
            </Item>
        )
    })

    return (
        <ul>
            { _items }
        </ul>
    )
}

export default Items
