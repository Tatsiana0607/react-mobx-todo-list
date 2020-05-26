import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import TodoStore from "./store";
import * as serviceWorker from './serviceWorker';

const store = new TodoStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
