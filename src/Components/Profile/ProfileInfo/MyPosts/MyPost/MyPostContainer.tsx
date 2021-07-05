import MyPost from "./MyPost";
import {addPostAC} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";


const MyPostContainer = connect(null, {AddPostAC: addPostAC})(MyPost)

export default MyPostContainer;
