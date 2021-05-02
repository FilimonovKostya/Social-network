import Dialogs from "./Dialogs";
import {AddMessageAC, AddMessageActionType, ChangeMessageAC, ChangeMessageActionType} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/reduxStore";
import {DialogsPage} from "../../Redux/store";


type mapStateToPropsType = {
    newMessageDialog: string
    dialogsData: DialogsPage
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newMessageDialog: state.dialogsPage.newDialogMessage,
        dialogsData: state.dialogsPage
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
