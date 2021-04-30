import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessageDialog, addPostMessage, State, } from "./Redux/state";

const RenderEntireTree = (state:State) => {
    ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPostMessage} addMessageDialog={addMessageDialog}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
};

export default RenderEntireTree;
