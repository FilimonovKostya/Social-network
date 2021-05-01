import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/store";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.state} addPost={store.addPostMessage.bind(store)} addMessageDialog={store.addMessageDialog.bind(store)}
                     onChangePostText={store.onChangePostText.bind(store)}
                     newPostsText={store.state.profilePage.newPostText} newMessageDialog={store.state.dialogsPage.newDialogMessage}
                     onChangeDialogMessage={store.onChangeDialogMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()
store.subscribe(renderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
