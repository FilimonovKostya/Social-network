import React from 'react';
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {AddMessageAC, ChangeMessageAC} from "../../Redux/dialogsReducer";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {

            const state = store.getState()
            const addMessage = () => store.dispatch(AddMessageAC())
            const changeMessage = (message: string) => store.dispatch(ChangeMessageAC(message))
            const newMessageDialog = state.dialogsPage.newDialogMessage

            return <Dialogs dialogsData={state.dialogsPage} addMessage={addMessage} changeMessage={changeMessage} newMessageDialog={newMessageDialog}/>
        }}
    </StoreContext.Consumer>
};

export default DialogsContainer;
