import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'

import reducerA from './store/reducerA'
import reducerB from './store/reducerB'

const rootReducer = combineReducers({
  rA : reducerA,
  rB : reducerB
})
const store = createStore(rootReducer)
const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store = {store}>  
    <App />
</Provider>
, rootElement);
