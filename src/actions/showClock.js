export const CLOCK_SHOW = 'CLOCK_SHOW';
export const CLOCK_HIDE = 'CLOCK_HIDE';

export const defaultPayload = {
    isViewing: false
};

export function showMessage() {
    return (dispatch) => {
        dispatch({
            type: CLOCK_SHOW,
            payload: {
                isViewing: true
            }
        });
    
        setTimeout(() => {
            dispatch({
                type: CLOCK_HIDE,
                payload: { isViewing: false }
            });
        }, 5000);
    };
}