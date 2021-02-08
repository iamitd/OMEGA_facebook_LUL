import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "9d530f15-1693-447a-8ac3-0b71c76d8b72"}
});
export const getUsers =(currentPage=1,pageSize=10) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
       .then(response => {
           return response.data
       })
}
export const getUserProfile =(userId) => {
    return instance.get(`profile/`+userId)
        .then(response => {
            return response.data
        })
}
export const follow =(userId) => {
    return instance.delete(`follow/${userId}`,{
        withCredentials: true,
        headers: {
            "API-KEY": "9d530f15-1693-447a-8ac3-0b71c76d8b72"}
    })
        .then(response => {
            return response.data
        })
}
export const unfollow =(userId) => {
    return instance.post(`follow/${userId}`,{},{
        withCredentials: true,
        headers: {
            "API-KEY": "9d530f15-1693-447a-8ac3-0b71c76d8b72"}
    })
        .then(response => {
            return response.data
        })
}
export const auth =() => {
    return instance.get(`auth/me`, {
        withCredentials: true
    })
        .then(response => {
            return response.data
        })
}
