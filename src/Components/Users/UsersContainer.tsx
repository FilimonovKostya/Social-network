import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users: UsersType[]
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage
    }
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
