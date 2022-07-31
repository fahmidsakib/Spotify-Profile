import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Main from './components/Main'
import './index.css'


let root = ReactDOM.createRoot(document.getElementById('root'));
    
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </BrowserRouter >
    </Provider>

);