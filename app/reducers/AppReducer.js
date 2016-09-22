import { combineReducers } from 'redux'
import FilterItem from './FilterItem'
import Items from './Items'

export default combineReducers( {
    filterItem: FilterItem,
    items: Items
} )
