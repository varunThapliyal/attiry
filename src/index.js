import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import  Store from './Redux/store/store';



ReactDOM.render(

    <Provider store={Store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>,
 document.getElementById('root')

);


