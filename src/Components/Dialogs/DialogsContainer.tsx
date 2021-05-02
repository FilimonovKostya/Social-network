import React from 'react';
import {AddMessageAC, ChangeMessageAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/store";

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = ({store}: DialogsContainerPropsType) => {

    const state = store.getState()
    const addMessage = () => store.dispatch(AddMessageAC())
    const changeMessage = (message: string) => store.dispatch(ChangeMessageAC(message))
    const newMessageDialog = state.dialogsPage.newDialogMessage

    return <Dialogs dialogsData={state.dialogsPage} addMessage={addMessage} changeMessage={changeMessage} newMessageDialog={newMessageDialog}/>
};

export default DialogsContainer;
