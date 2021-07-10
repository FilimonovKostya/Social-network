import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import {reduxStore} from "./Redux/reduxStore";


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={reduxStore}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
