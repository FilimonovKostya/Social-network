import axios from "axios";
import {UsersType} from "../Redux/usersReducer";
import {UserProfileType} from "../Redux/profileReducer";

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
    setUsers(userId: string) {
        return instance.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => res.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getAuth() {
        return instance.get('auth/me')
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus(status: string) {

        return instance.put(`profile/status`, {status})
    }
}
