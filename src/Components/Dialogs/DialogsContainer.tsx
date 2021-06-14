import Dialogs from "./Dialogs";
import {AddMessageAC, AddMessageActionType, ChangeMessageAC, ChangeMessageActionType, DialogPageStateType} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/reduxStore";


type mapStateToPropsType = {
    newMessageDialog: string
    dialogsData: DialogPageStateType
    auth:boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newMessageDialog: state.dialogsPage.newDialogMessage,
        dialogsData: state.dialogsPage,
        auth: state.auth.isAuth
    }
}

type mapDispatchToPropsType = {
    addMessage: () => void
    changeMessage: (message: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch<AddMessageActionType | ChangeMessageActionType>): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(AddMessageAC())
        },
        changeMessage: (message: string) => {
            dispatch(ChangeMessageAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
