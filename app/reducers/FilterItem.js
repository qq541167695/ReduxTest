import Immutable from 'immutable';

const initState = '';

export default ( state = initState, payload )=> {

    switch( payload.type ){
        case 'filter-item':
            return state = payload.txt;
        break;

        default :
            return state;
    }

}
