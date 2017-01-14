import { connect } from 'react-redux'
import * as actions from '../actions/todos';

import Todos from '../components/todos/Todos';

// redux-form expects a promise to handle the submit
// the save action could be used directly,
// but we want to navigate away if saved correctly
const handleSave = (values, dispatch) => {
  return new Promise((resolve, reject) => {

    // dispatch the save action
    dispatch(actions.save(values)).then(
      (data) => {
        // move away ad resolve the promise given to the form
        dispatch(actions.navigate('list'));
        resolve();
      }
    ).catch(
      (error) => {
        // unable to save, let the form know
        reject({_error: 'Error saving...'});
      }
    );

  });
}

// assign part of the state to the props (can return multiple items)
const mapStateToProps = (state) => {
  return state.todos;
}

// map actions to this.props.someFunction
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(actions.fetch());
    },

    edit: (id) => {
      dispatch(actions.navigate('form')); // the form could be already filled
      dispatch(actions.fetchOne(id));     // but this fetch will clean it right away
    },

    remove: (id) => {
      dispatch(actions.remove(id));
    },

    save: handleSave,                     // the promise for redux-form

    add: () => {
      dispatch(actions.navigate('form')); // the form could be already filled
      dispatch(actions.fetchOne());       // but this fetch will clean it right away
    },

    navigate: (targetScene) => {
      dispatch(actions.navigate(targetScene));
    },

    switchSimulation: (currentStatus) => {          // switchs the simulation on/off
      currentStatus = currentStatus ? false : true; // switchs the current status
      dispatch(actions.setSimulation(currentStatus));
    },
  }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default TodosContainer
