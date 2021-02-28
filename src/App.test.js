import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';

const setup = (state = {}) => {
  const store = storeFactory(state);
  return shallow(<App store = {store} />).dive().dive();
}

describe('redux props', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const succcessProp = wrapper.instance().props.success;
    expect(succcessProp).toBe(success);  
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('has access to `getSecretWord` action creator function', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
});