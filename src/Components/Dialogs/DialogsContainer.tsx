import Dialogs from "./Dialogs";
import {AddMessageAC, ChangeMessageAC, DialogPageStateType} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../Redux/reduxStore";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";
import React from "react";


type mapStateToPropsType = {
    newMessageDialog: string
    dialogsData: DialogPageStateType
    auth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newMessageDialog: state.dialogsPage.newDialogMessage,
        dialogsData: state.dialogsPage,
        auth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {AddMessageAC, ChangeMessageAC}),
    WithAuthRedirect
)(Dialogs)
