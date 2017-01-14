import Constants from '../components/Constants';

// export const TODO_NAVIGATE = 'TODO_NAVIGATE';
// export const TODO_FETCHING = 'TODO_FETCHING';
// export const TODO_FETCHED = 'TODO_FETCHED';
// export const TODO_FETCHING_ONE = 'TODO_FETCHING_ONE';
// export const TODO_FETCHED_ONE = 'TODO_FETCHED_ONE';
// export const TODO_DELETING = 'TODO_DELETING';
// export const TODO_SET_SIMULATION = 'TODO_SET_SIMULATION';

import localApi from '../libs/localApi';

// define a local db for todo (simulated async api)
let myAPI = new localApi(
  {
    tableName: 'myTodos', // used as local storage key
    fields: {               // row structure (pre loaded for new item)
      _id: null,            // row key (required)
      title: ''
    },
    delay: 0,               // simulated delay
  }
);

export const navigate = (value) => {
  return {
    type: Constants.TODO_NAVIGATE,
    payload: value
  };
}

export const fetch = () => {
  return (dispatch) => {

    // show a loading
    dispatch(fetching())

    // async load
    myAPI.getAll().then(
      (data) => dispatch(fetched(data))
    );
  }

}

export const fetching = () => {
  return {
    type: Constants.TODO_FETCHING
  };
}

export const fetched = (data) => {
  return {
    type: Constants.TODO_FETCHED,
    payload: data
  };
}

export const fetchOne = (id = null) => {
  return (dispatch) => {

    // show a loading
    dispatch(fetchingOne())

    // async load
    myAPI.get(id).then(
      (data) => dispatch(fetchedOne(data))
    );
  }
}

export const fetchingOne = () => {
  return {
    type: Constants.TODO_FETCHING_ONE
  };
}

export const fetchedOne = (data) => {
  return {
    type: Constants.TODO_FETCHED_ONE,
    payload: data
  };
}

export const save = (values, callback) => {
  return (dispatch) => {
    // return the save promise
    return myAPI.save(values);
  }

}

export const remove = (id = null) => {
  return (dispatch) => {

    // async delete
    myAPI.remove(id).then(
      (data) => dispatch(fetched(data))
    );
  }
}

// export const setSimulation = (status) => {
//   if (status) {
//     myAPI.delay = 700;
//   } else {
//     myAPI.delay = 0;
//   }

//   return {
//     type: TODO_SET_SIMULATION,
//     payload: status
//   };
// }
