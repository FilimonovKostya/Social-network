import {connect} from "react-redux";
import Users from "./Users";
import {followAC, ItemsType, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
