// simpleReducer.js

export default (state = {}, action) =>{
    switch(action.type){
        case 'SIMPE_ACTION':
        return {
            result: payload
        }

        default: 
            return state
    }
}