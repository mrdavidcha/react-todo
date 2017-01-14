import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import each reducer
import app from './app';         // this will then be available as state.app
import todos from './todos';     // and this one as state.todos

// combine all reducers, each one will then be available as state.someReducer
const myReducers = combineReducers({
  app,
  todos,
  form: formReducer, // required by redux-form
});

export default myReducers;
