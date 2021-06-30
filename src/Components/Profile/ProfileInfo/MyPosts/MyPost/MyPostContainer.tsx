import MyPost from "./MyPost";
import {AddPostAC, AddPostActionType} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapDispatchToPropsType = {
    addPostMessage: (message: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch<AddPostActionType>): mapDispatchToPropsType => {
    return {
        addPostMessage(message: string) {
            dispatch(AddPostAC(message))
        },

    }
}

const MyPostContainer = connect( null,mapDispatchToProps)(MyPost)

export default MyPostContainer;
