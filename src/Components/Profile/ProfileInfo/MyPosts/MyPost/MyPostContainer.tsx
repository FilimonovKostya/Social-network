import MyPost from "./MyPost";
import {AddPostAC, AddPostActionType, ChangePostTextAC, ChangePostTextActionType} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    newPostsText: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newPostsText: state.profilePage.newPostText
    }
}

type mapDispatchToPropsType = {
    changeText: (text: string) => void
    addPostMessage: () => void
}

const mapDispatchToProps = (dispatch: Dispatch<ChangePostTextActionType | AddPostActionType>): mapDispatchToPropsType => {
    return {
        addPostMessage() {
            dispatch(AddPostAC())
        },
        changeText(message: string) {
            dispatch(ChangePostTextAC(message))
        }

    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
