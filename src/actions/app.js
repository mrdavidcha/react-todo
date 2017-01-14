// export const APP_NAVIGATE = 'APP_NAVIGATE';
import Constants from '../components/Constants';

export function appNavigate(value) {
    return {
        // type: Constants.APP_NAVIGATE,
        type: Constants.APP_NAVIGATE,
        payload: value
    };

}