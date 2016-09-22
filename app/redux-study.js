import { createStore } from 'redux'
import { combineReducers } from 'redux'



function todos2( state='', action ){
    switch ( action.type ) {
        case 'ADD_STRING':
            return state.push( action.text );
        default:
            return state
    }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

let store = createStore( combineReducers( { todos, todos2 } ) , {
    todos: [ 'Use Redux' ],
    todos2: 'aaa'
} );

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]


export default {
    name: 'test'
}


/**
 * --------redux
 *
 * ----reducer 一个函数，根据action要求，处理state
 * @param state(any) 处理的state
 * @param action(Object) 处理用的数据
 * @example function todos2( state=[], action ){  }
 *
 *
 * ----合并reducer，并生成一个新的reducer
 * @param (Object) reducers 合并的reducer组
 * @example combineReducers( { reducer1, reducer2 } );
 * @return (Reducer)
 * combineReducers( reducers )
 *
 *
 * ----创建store
 * @param reducer(Reducer) 处理state的reducer
 * @param preloadedState(any) 初始化的state,如果reducer为combine后的对象，初始化数据则为object,key为reducer的名字
 *          @example reducer = combineReducers( r1, r2 );
 *                   createStore( reducer, {
 *                      r1: ...,
 *                      r2: ....
 *                   } )
 * @return (Store)
 * createStore( reducer, [preloadedState], [enhancer] )
 *
 *
 *
 * --------react-redux
 * 连接react-redux和redux包裹控件的容器
 * @param (ReduxStore) store redux框架的store
 * @param children(ReactElement) React控件
 * <Provider store>
 *
 * 将控件与对应的转换函数进行连接
 * @param mapStateToProps(function) 将state转换成子类props的func
 * @param mapDispatchToProps(function) 返回事件处理函数集的Object
 * @param mergeProps(function) 合并属性的处理func
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * @example
 *  function mapStateToProps( state ){
     return {
         items: state
     }
 }

 //将一些动作，动态添加到组件的属性上。
 //如果事件名，与传递的名称相同，可使用工具方法
 // function mapDispatchToProps( dispatch ) {
 //     return {
 //         addItem: ( txt )=> {
 //             console.log( '__', txt, ItemAction.addItem( txt ) );
 //             dispatch( ItemAction.addItem( txt ) );
 //         }
 //     }
 // }


 function mapDispatchToProps( dispatch ) {
     return {
         actions: bindActionCreators( ItemAction, dispatch )
     }
 }

 function mergeProps(stateProps, dispatchProps, ownProps) {
     console.log( stateProps, dispatchProps, ownProps, this );
   // return Object.assign({}, ownProps, {
   //   todos: stateProps.todos[ownProps.userId],
   //   addTodo: (text) => dispatchProps.addTodo(ownProps.userId, text)
   // })
   return {

   }

 }
 */

 /**
  * bindActionCreators 绑定事件到创建者上
  * @param actionCreators(Function or Object) 事件处理集function则统一处理，object,则key:value，批量创建多种事件处理集
  * @example
  *     import * as ItemAction from './actions/index'
  *
  *     bindActionCreators( ItemAction, dispatch )
  */

var store;
