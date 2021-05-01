import * as serviceWorker from './serviceWorker';
import {addMessageDialog, addPostMessage, onChangeDialogMessage, onChangePostText, state, subscribe} from "./Redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPostMessage} addMessageDialog={addMessageDialog} onChangePostText={onChangePostText}
                     newPostsText={state.newPostsText} newMessageDialog={state.dialogsPage.newDialogMessage} onChangeDialogMessage={onChangeDialogMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()
subscribe(renderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
