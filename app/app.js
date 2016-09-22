import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './container/App'
import appReducers from './reducers/AppReducer'


const store = createStore( appReducers );

render(
    <div>
        <Provider store={store} >
            <App />
        </Provider>
    </div>,
    document.querySelector('#app')
);
