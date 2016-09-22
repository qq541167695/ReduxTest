export const addItem = ( txt )=> {
    return {
        type: 'add-item',
        txt
    }

}

export const removeItem = ( ix )=> {
    return {
        type: 'remove-item',
        ix
    }
}

export const filterItem = ( txt )=> {
    return {
        type: 'filter-item',
        txt
    }
}

export const clearItem = ( )=> {
    return {
        type: 'clear-item'
    }
}
