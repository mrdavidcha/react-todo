// import {
//   TODO_NAVIGATE,
//   TODO_FETCHING,
//   TODO_FETCHED,
//   TODO_FETCHING_ONE,
//   TODO_FETCHED_ONE,
//   TODO_SET_SIMULATION
// } from '../actions/todos';
import Constants from '../components/Constants';

const INITIAL_STATE = {
    scene: 'list',        // active scene  displayed by the 'todos' component
    items: [],            // fetched list of todos
    itemsFetching: false, // to display a 'loading..' when fetching
    item: null,           // stores the loaded item to be used on the form
    itemFetching: false,  // to display a 'loading..' when opening the form
};

export default function(state = INITIAL_STATE, action) {
    console.log(state);
    switch (action.type) {
        // change the scene (form / list)
        case Constants.TODO_NAVIGATE:
            return {...state, scene: action.payload };

        // the list is being loaded, show the loading.. and reset the items
        case Constants.TODO_FETCHING:
            return {...state, itemsFetching: true, items: [] };

        // hide the loading and set the loaded data into items
        case Constants.TODO_FETCHED:
            return {...state, itemsFetching: false, items: action.payload };

        // one item is being loaded, show a loading.. inside the form and reset the current item
        case Constants.TODO_FETCHING_ONE:
            return {...state, itemFetching: true, item: null };

        // hide the loading.. inside the form and set the loaded data into our 'item'
        case Constants.TODO_FETCHED_ONE:
            return {...state, itemFetching: false, item: action.payload };

        // do nothing
        default:
            return state;
    }
}