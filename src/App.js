import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Input from './Input';
import Congrats from './Congrats';
import { getSecretWord } from './actions';

class App extends Component {
  render() {
    const {success, guessedWords, secretWord} = this.props;
    return (
      <div data-test = 'component-app' className="container">
        <h1>Jotto</h1>
        <Congrats success = {success} />
        <Input success = {success} secretWord = {secretWord} />
        <GuessedWords guessedWords = {guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {success, guessedWords, secretWord} = state;
  return {success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(App);
