import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { MainWrapper } from 'containers'
import middlewares from 'middlewares'
import rootReducer from 'reducers'
import classNames from 'classnames'

import styles from './index.scss'

const enhancer = compose(
    applyMiddleware(...middlewares),
)


const store = createStore(rootReducer, {}, enhancer)

const app = (store) => (
    <Provider store={store}>
        <div className={classNames(styles['body'])}>
            <MainWrapper/>
        </div>
    </Provider>
)

ReactDOM.render(
    app(store),
    document.getElementById('app'),
)
