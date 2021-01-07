import { createStore, combineReducers } from 'redux';
import toursReducer from '../reducers/tours'

const configureStore = () => {
    const store = createStore(
      combineReducers({
        tours:toursReducer
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
    return store;
  };
  

  export default configureStore