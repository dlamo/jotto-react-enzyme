export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
};

// Returns Redux Thunk function that disàtches GUESS_WORD action and (conditionally) CORRECT_GUESS action
export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {

    };
};