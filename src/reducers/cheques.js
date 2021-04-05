import { GET_CHEQ_REQUEST } from '../actions/ChequeActions'
import { GET_CHEQ_SUCCESS } from '../actions/ChequeActions'
import { GET_CHEQ_FAIL } from '../actions/ChequeActions'

import { DEL_CHEQ_REQUEST } from '../actions/ChequeActions'
import { DEL_CHEQ_SUCCESS } from '../actions/ChequeActions'
import { DEL_CHEQ_FAIL } from '../actions/ChequeActions'

import { ADD_CHEQ_REQUEST } from '../actions/ChequeActions'
import { ADD_CHEQ_SUCCESS } from '../actions/ChequeActions'
import { ADD_CHEQ_FAIL } from '../actions/ChequeActions'

// import { SET_CURRENT_ROW } from '../actions/ObjActions'
// 
// import { GET_DASH_REQUEST } from '../actions/DashActions'
// import { GET_DASH_SUCCESS } from '../actions/DashActions'
// import { GET_DASH_FAIL } from '../actions/DashActions'

const initialState = {
  CHEQArray: [],
  isFetching: false, // изначально статус загрузки - ложь
}

export function chequeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHEQ_REQUEST:
        return { ...state, isFetching: true };

    case GET_CHEQ_SUCCESS:
        return { ...state, CHEQArray: action.payload, isFetching: false };
  
    case GET_CHEQ_FAIL:
        return { ...state, isFetching: false };

    case DEL_CHEQ_REQUEST:
        return { ...state, isFetching: true };
    
    case DEL_CHEQ_SUCCESS:
        return { ...state, CHEQArray: state.CHEQArray.filter(el => el.uid !== action.payload), isFetching: false };
    
    case DEL_CHEQ_FAIL:
        return { ...state, isFetching: false };
      
    case ADD_CHEQ_REQUEST:
        return { ...state, isFetching: true };
      
    case ADD_CHEQ_SUCCESS:
        return { ...state, CHEQArray: [...state.CHEQArray, action.payload], isFetching: false };
      
    case ADD_CHEQ_FAIL:
        return { ...state, isFetching: false };
        
  //    case SET_CURRENT_ROW:
//        return { ...state, CurrentRow: action.payload };
//
//    case GET_DASH_REQUEST:
//        return { ...state, isFetching: true };
//  
//    case GET_DASH_SUCCESS:
//        return { ...state, OBJArray: [...action.payload.mas], CurrentRow: action.payload.row, isFetching: false };
//    
//    case GET_DASH_FAIL:
//        return { ...state, isFetching: false };
  
    default:
        return state
  }
}
