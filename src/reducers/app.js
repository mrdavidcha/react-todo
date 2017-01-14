// import { APP_NAVIGATE } from '../actions/app';
import Constants from '../components/Constants';


const INITIAL_STATE = {
    scene: 'home', // the initial scene
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        // change the scene the main app is showing (home, todos)
        case Constants.APP_NAVIGATE:
            return {...state, scene: action.payload };

            // do nothing
        default:
            return state;
    }
}