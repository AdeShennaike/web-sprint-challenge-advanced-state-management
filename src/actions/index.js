import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAIL_FETCH = 'FAIL_FETCH';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type:START_FETCH})

        axios.get("http://localhost:3333/smurfs")
        .then(res => dispatch({type:SUCCESS_FETCH,payload:res.data}))
        .catch(err => dispatch({type:FAIL_FETCH,payload:err.message}))
    }
}

export const addSmurf = ({id,name,position,nickname,description}) => {
    return({type:ADD_SMURF,payload:{id,name,position,nickname,description}})
    }

export const addError = (err) => {
    return({type:ADD_ERROR,payload:err})
    }


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.