/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider, useSelector, useDispatch} from 'react-redux'


const store = createStore(
    rootReducer
  )

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => Root);
