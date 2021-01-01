import axios from 'axios';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// import {fetchRecipeRequest, fetchRecipeSuccess, fetchRecipeError} from './shop/shopActions'

import shopReducer from './shop/shopReducer'

const redux = require('redux')
const createStore = redux.createStore






export const store = createStore(shopReducer, redux.applyMiddleware(thunk, logger))
