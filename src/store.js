import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { loadSearchResults } from './actions/appAction';

export default function configureStore(initialState={}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, sagaMiddleware)
  );

  store.dispatch(loadSearchResults());
  
  return store;
}
