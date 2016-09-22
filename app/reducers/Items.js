import Immutable from 'immutable';

const initState = Immutable.fromJS( [ 'a', 'b', 'c' ] );

export default ( state = initState, payload )=> {

    switch( payload.type ){
        case 'remove-item':
            return state.delete( payload.ix );
        break;

        case 'add-item':
            return state.push( payload.txt );
        break;

        case 'clear-item':
            return state.clear();

        default :
            return state;
    }

}
