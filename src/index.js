import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import CssBaseline from "@material-ui/core/CssBaseline";

const app = (
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>
)

ReactDOM.render(app,
  document.getElementById('root')
);
