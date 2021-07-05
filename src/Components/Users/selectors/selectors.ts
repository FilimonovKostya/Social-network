import {AppStateType} from "../../../Redux/reduxStore";

export const getItems = (state: AppStateType) => {
    return state.usersPage.items
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getIsLoading = (state: AppStateType) => {
    return state.usersPage.isLoading
}

export const getIsDisabled = (state: AppStateType) => {
    return state.usersPage.isDisabled
}
