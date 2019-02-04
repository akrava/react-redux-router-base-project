export const CLOCK_SHOW = 'CLOCK_SHOW';
export const CLOCK_HIDE = 'CLOCK_HIDE';

export const defaultPayload = {
    isViewing: false
};

export function showClock() {
    return (dispatch) => {
        for (let i = 0; i <= 5; i++) {
            setTimeout(() => {
                dispatch({
                    type: CLOCK_SHOW,
                    payload: { seconds: i, isViewing: i !== 5 }
                });
            }, i * 1000);
        }
    };
}