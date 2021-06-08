import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, ItemsType, setCurrentPage, setDisabledButton, setLoading, setTotalCount, setUsers, unFollow} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import Preloader from "../Preloader/Preloader";
import {API} from "../../Api/api";

const UsersAPIContainer = ({currentPage, setTotalCount, pageSize, totalCount, setUsers, items, error, follow, unFollow, setCurrentPage, setLoading, isLoading, isDisabled, setDisabledButton}: UsersAPIContainerPropsType) => {
    useEffect(() => {
        setLoading(true)
        API.getUsers(currentPage, pageSize)
            .then((response) => {
                setTotalCount(Math.ceil(response.totalCount / pageSize))
                setUsers(response.items)
                setLoading(false)
                setDisabledButton(false)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [currentPage, totalCount])

    return isLoading
        ? <Preloader/>
        : <Users items={items} currentPage={currentPage}
                 totalCount={totalCount}
                 follow={follow} unFollow={unFollow}
                 isDisabled={isDisabled}
                 setDisabledButton={setDisabledButton}
                 setCurrentPage={setCurrentPage}/>
}

type mapStateToPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    pageSize: number
    error: string[] | null
    isLoading: boolean
    isDisabled: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        isDisabled: state.usersPage.isDisabled,
    }
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setLoading: (isLoading: boolean) => void
    setDisabledButton: (isDisabled: boolean) => void
}

type UsersAPIContainerPropsType = mapDispatchToPropsType & mapStateToPropsType


export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalCount, setLoading, setDisabledButton})(UsersAPIContainer)
