// simpleAction.js

export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'yo yo this is my action payload'
    })
}