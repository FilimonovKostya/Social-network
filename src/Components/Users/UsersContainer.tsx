import {connect} from "react-redux";
import Users from "./Users";
import {followAC, ItemsType, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    items: ItemsType[]
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: state.usersPage.items
    }
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
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
