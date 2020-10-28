import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
//import Shoppinglist from './Shoppinglist'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('root'));
// ReactDOM.render(<Shoppinglist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

