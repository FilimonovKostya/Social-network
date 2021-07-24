import axios from "axios";
import {UsersType} from "../Redux/usersReducer";
import {ContactsType, UserProfileType} from "../Redux/profileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a918abd3-e56d-4f51-9680-86b073810b9f'
    },
})

export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

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
    setLogin(authData: LoginType) {
        return instance.post(`auth/login`, authData)
    },
    logout() {
        return instance.delete('auth/login')
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    updatePhoto(photo: File) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(contacts: updateProfile) {
        return instance.put(`/profile`, contacts)
    }

}


export type updateProfile = {
    lookingForAJob: boolean,
    aboutMe: string,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    },

}
