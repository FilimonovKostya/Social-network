// items: state.usersPage.items,
//     currentPage: state.usersPage.currentPage,
//     totalCount: state.usersPage.totalCount,
//     error: state.usersPage.error,
//     pageSize: state.usersPage.pageSize,
//     isLoading: state.usersPage.isLoading,
//     isDisabled: state.usersPage.isDisabled,

import {AppStateType} from "../../../Redux/reduxStore";

export const getItems = (state:AppStateType) => {
    return  state.usersPage.items
}

export const getCurrentPage = (state:AppStateType) => {
    return  state.usersPage.currentPage
}

export const getTotalCount = (state:AppStateType) => {
    return  state.usersPage.totalCount
}

export const getError= (state:AppStateType) => {
    return state.usersPage.error
}

export const getPageSize = (state:AppStateType) => {
    return  state.usersPage.pageSize
}

export const getIsLoading = (state:AppStateType) => {
    return  state.usersPage.isLoading
}

export const getIsDisabled= (state:AppStateType) => {
    return  state.usersPage.isDisabled
}
