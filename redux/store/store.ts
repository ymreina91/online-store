import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducer';

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;