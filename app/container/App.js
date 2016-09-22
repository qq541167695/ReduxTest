require( 'bootstrap/dist/css/bootstrap.css' );

import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { shouldComponentUpdate } from 'react-immutable-render-mixin';


import * as ItemAction from '../actions/ItemActions'
import Items from '../component/Items'
import Btns from '../component/Btns'
import FilterItem from '../component/FilterItem'


class App extends Component {
    constructor() {
        super();

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render(){

        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2>Todo List</h2>

                    <FilterItem
                        filterItem={ this.props.actions.filterItem } />

                    <Items
                        filterItem={ this.props.filterItem }
                        items={ this.props.items }
                        removeItem={ this.props.actions.removeItem } />

                    <Btns
                        clearItem={ this.props.actions.clearItem }
                        addItem={this.props.actions.addItem} />
                </div>
            </div>
        );

    }
}



//将app，连接上自动转换state到props的函数
//和动作连接的函数
export default connect( mapStateToProps, mapDispatchToProps )( App )


function mapStateToProps( state ){
    return {
        items: state.items,
        filterItem: state.filterItem
    }
}

/**
 * @param actionCreators(Function or Object) 事件创建者, function则统一处理，object,则key:value，批量创建多种事件创建得
 * @example 如上则可以使用
 */
function mapDispatchToProps( dispatch ) {
    return {
        actions: bindActionCreators( ItemAction, dispatch )
    }
}
