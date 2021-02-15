const SEND_MESSAGE = "SEND-MESSAGE"

let initialState ={
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is ur soul?'},
        {id: 3, message: 'Slaaave'}
    ],
    dialogs: [
        {name: 'Pudge', id: 1},
        {name: 'Shadow Fiend', id: 2},
        {name: 'Slave', id: 3},
        {name: 'Dimych', id: 4}
    ]
}
const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages:[...state.messages,{id: 6, message: body}]
            }
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody })
export default dialogsReducer