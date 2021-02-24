import { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
    render() {
        const contents = this.props.success
            ? null
            : (
                <form className='form-inline'>
                    <input
                        data-test='input-box'
                        type='text'
                        placeholder='Enter guess' />
                    <button
                        data-test='submit-button'
                        className='btn btn-primary mb-2'
                        type='submit'>
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

export default connect(mapStateToProps)(Input);