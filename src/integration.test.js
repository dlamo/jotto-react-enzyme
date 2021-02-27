import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';
    describe('no guessed word', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            };
            expect(newState).toEqual(expectedState);
        });
    });
    describe('some guessed word', () => {
        let store;
        const initialState = {
            secretWord,
            guessedWords: [{
                guessedWord: 'agile',
                letterMatchCount: 1
            }]
        };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    ...initialState.guessedWords,
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    },
                ]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [
                    ...initialState.guessedWords,
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});