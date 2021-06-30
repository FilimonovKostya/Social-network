import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostType} from "../../../../Redux/profileReducer";
import {AppStateType} from "../../../../Redux/reduxStore";


type mapStateToPropsType = {
    posts: PostType[]

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}


const MyPostsContainer = connect(mapStateToProps, {})(MyPosts)

export default MyPostsContainer;
