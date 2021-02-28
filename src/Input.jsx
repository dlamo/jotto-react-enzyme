import { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);
        this.state = { currentGuess: null };
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }
    submitGuessedWord(e) {
        e.preventDefault();
        const guessedWord = this.state.currentGuess;
        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord);
            this.setState({ ...this.state, currentGuess: '' });
        }
    }
    render() {
        const contents = this.props.success
            ? null
            : (
                <form className='form-inline'>
                    <input
                        data-test='input-box'
                        type='text'
                        value={this.state.currentGuess}
                        onChange={(e) => this.setState({ ...this.state, currentGuess: e.target.value })}
                        placeholder='Enter guess' />
                    <button
                        data-test='submit-button'
                        className='btn btn-primary mb-2'
                        type='submit'
                        onClick={(e) => this.submitGuessedWord(e)}>
                        Submit
                    </button>
                </form>
            )
        return (
            <div data-test='component-input'>
                {contents}
            </div>
        ) 
    }
};

const mapStateToProps = ({success}) => {
    return {success};
};

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);