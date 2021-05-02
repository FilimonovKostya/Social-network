import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostType} from "../../../../Redux/profileReducer";
import {AppStateType} from "../../../../Redux/reduxStore";


type mapStateToPropsType = {
    posts: PostType[]
    newPostsText: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostText
    }
}


const MyPostsContainer = connect(mapStateToProps, {})(MyPosts)

export default MyPostsContainer;
