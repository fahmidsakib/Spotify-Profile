import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import App from './components/App'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Main from './components/Main'
let root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/Main/*" element={<Main />} />
            </Routes>
        </BrowserRouter >
    </Provider>

);