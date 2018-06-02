import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import {Provider} from "react-redux";
import {getAllUsers} from './API/UserAPI';
import Root from './components/Root';

store.dispatch(getAllUsers());
ReactDOM.render(<Provider store={store}>
    <Root />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
