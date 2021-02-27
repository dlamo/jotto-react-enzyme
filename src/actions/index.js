import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};

// Returns Redux Thunk function that disàtches GUESS_WORD action and (conditionally) CORRECT_GUESS action
export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount
            }
        });

        if (guessedWord === secretWord) {
            dispatch({
                type: actionTypes.CORRECT_GUESS
            });
        };
    };
};

// http://localhost:3030 port where we could have a web server with an api to call
export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3030')
            .then(response => {
                dispatch({
                    type: actionTypes.SET_SECRET_WORD,
                    payload: response.data
                });
            });
    }
}