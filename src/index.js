import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from 'react-redux';

import store from './redux/store';

const app = (
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>
)

ReactDOM.render(app,
  document.getElementById('root')
);
