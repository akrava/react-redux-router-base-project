import { CLOCK_SHOW, CLOCK_HIDE, defaultPayload } from '../actions/showClock';

const initialState = {
    ...defaultPayload
};
  
function messageReducer(state = initialState, action) {
    const data = action.payload;
    switch (action.type) {
        case CLOCK_SHOW: {
            return {
                ...state,
                isViewing: data.isViewing
            };
        }
        case CLOCK_HIDE: {
            return {
                ...state,
                isViewing: data.isViewing
            };
        }
        default: {
            return state;
        } 
    }
}

export default messageReducer;