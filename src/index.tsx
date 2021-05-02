import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Store, store} from "./Redux/store";
import {reduxStore} from "./Redux/reduxStore";


const renderEntireTree = (state:Store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store.getState()} dispatch={store.dispatch.bind(store)}
                     newPostsText={state.profilePage.newPostText} newMessageDialog={state.dialogsPage.newDialogMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(reduxStore.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

console.log(reduxStore.getState())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
