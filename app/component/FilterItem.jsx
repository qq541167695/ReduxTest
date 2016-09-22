import React from 'react'

var FilterItem = ( props )=> {

    return (
        <input
            onInput={ ( e )=> props.filterItem( e.target.value ) }
            className="form-control" />
    )
}

export default FilterItem
