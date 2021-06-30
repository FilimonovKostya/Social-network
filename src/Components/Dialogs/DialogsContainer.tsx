import Dialogs from "./Dialogs";
import {AddMessageAC, DialogPageStateType} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../Redux/reduxStore";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";
import React from "react";


type mapStateToPropsType = {

    dialogsData: DialogPageStateType
    auth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage,
        auth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {AddMessageAC}),
    WithAuthRedirect
)(Dialogs)
