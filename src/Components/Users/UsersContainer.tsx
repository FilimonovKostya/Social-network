import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, ItemsType, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {useEffect} from "react";
import axios from "axios";

const UsersAPIContainer = ({currentPage, setTotalCountAC, pageSize, totalCount, setUsers, items, error, follow, unFollow, setCurrentPageAC}: UsersAPIContainerPropsType) => {
    useEffect(() => {
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                setTotalCountAC(Math.ceil(response.data.totalCount / pageSize))
                setUsers(response.data.items)

            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [currentPage, totalCount])

    return <Users items={items} currentPage={currentPage}
                  totalCount={totalCount} error={error}
                  follow={follow} unFollow={unFollow} setUsers={setUsers}
                  setCurrentPageAC={setCurrentPageAC} setTotalCountAC={setTotalCountAC} pageSize={pageSize}/>
}

type mapStateToPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    pageSize: number
    error: string[] | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
        pageSize: state.usersPage.pageSize
    }
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalCountAC: (totalCount: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow(userId) {
            dispatch(followAC(userId))
        },
        unFollow(userId) {
            dispatch(unFollowAC(userId))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
        setCurrentPageAC(currentPage) {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCountAC(totalCount) {
            dispatch(setTotalCountAC(totalCount))
        },
    }
}

type UsersAPIContainerPropsType = mapDispatchToPropsType & mapStateToPropsType



export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)