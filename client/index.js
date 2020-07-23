import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import { Provider } from "react-redux";
import store from './store/rootStore';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);

