import axios from "axios";
import {UsersType} from "../Redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a918abd3-e56d-4f51-9680-86b073810b9f'
    },
})

export const API = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id:number){
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id:number){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}
