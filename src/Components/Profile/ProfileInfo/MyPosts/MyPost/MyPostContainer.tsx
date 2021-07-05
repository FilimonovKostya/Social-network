import MyPost from "./MyPost";
import {AddPostAC} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";


const MyPostContainer = connect(null, {AddPostAC})(MyPost)

export default MyPostContainer;
