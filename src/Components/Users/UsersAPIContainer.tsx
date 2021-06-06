import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, ItemsType, setCurrentPage, setLoading, setTotalCount, setUsers, unFollow, UsersType} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

const UsersAPIContainer = ({currentPage, setTotalCount, pageSize, totalCount, setUsers, items, error, follow, unFollow, setCurrentPage, setLoading, isLoading}: UsersAPIContainerPropsType) => {
    useEffect(() => {
        setLoading(true)
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                setTotalCount(Math.ceil(response.data.totalCount / pageSize))
                setUsers(response.data.items)
                setLoading(false)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [currentPage, totalCount])

    return isLoading
        ? <Preloader/>
        : <Users items={items} currentPage={currentPage}
                 totalCount={totalCount} error={error}
                 follow={follow} unFollow={unFollow} setUsers={setUsers}
                 setCurrentPage={setCurrentPage} setTotalCount={setTotalCount} pageSize={pageSize}/>
}

type mapStateToPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    pageSize: number
    error: string[] | null
    isLoading: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading
    }
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setLoading: (isLoading: boolean) => void
}

type UsersAPIContainerPropsType = mapDispatchToPropsType & mapStateToPropsType


export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalCount, setLoading})(UsersAPIContainer)
