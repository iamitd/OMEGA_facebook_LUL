import {profileAPI} from "../api/api";
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 24},
        {id: 3, message: 'Blablabla', likesCount: 4},
        {id: 4, message: 'Basfcc', likesCount: 22},
    ],
    profile: null,
    status: ""
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts,newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default :
            return state
    }

}
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export default profileReducer