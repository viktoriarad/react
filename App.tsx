import React from 'react';
import { Provider } from 'react-redux';
import { createStore} from "redux";
import reducers from './src/reducers';
import Main from './src/Main';

const store = createStore(reducers);

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
