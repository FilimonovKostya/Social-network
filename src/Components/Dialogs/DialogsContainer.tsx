import Dialogs from "./Dialogs";
import {addMessageAC, DialogPageStateType} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../Redux/reduxStore";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";
import React from "react";


type mapStateToPropsType = {
    dialogsData: DialogPageStateType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessageAC}),
    WithAuthRedirect
)(Dialogs)
