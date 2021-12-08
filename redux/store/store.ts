import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { IGlobalState, initialState } from "@lib/types";
import reducers from '@redux/reducer';

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

const makeStore = () => store;
export const wrapper = createWrapper<Store<IGlobalState>>(makeStore, {debug: true});

export default store;
