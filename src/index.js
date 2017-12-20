import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './app'


const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(<ReduxApp />, document.getElementById('root'));