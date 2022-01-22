import {START_FETCH, SUCCESS_FETCH, FAIL_FETCH, ADD_SMURF, ADD_ERROR} from '../actions/index';

export const initialState = {
    smurf:[],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case START_FETCH:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case SUCCESS_FETCH:
            return {
                ...state,
                smurf: action.payload,
                error: ''
            }

        case FAIL_FETCH:
            return {
                ...state,
                error: action.payload
            }

        case ADD_SMURF:
            return{
                ...state,
                smurf: [...state, action.payload]
            }

            case ADD_ERROR:
            return({
                ...state,
                error:`${state.error}${action.payload}`
            });
        default:
            return state
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.