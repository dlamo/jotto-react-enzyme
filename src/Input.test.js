import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";
import Input, { UnconnectedInput } from "./Input";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    // We have to dive two times as the shallow Input without it will include the Provider and the App component
    const wrapper = shallow(<Input store = {store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true};
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const succcessProp = wrapper.instance().props.success;
        expect(succcessProp).toBe(success);
    });
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('`guessWord` action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessWordMock = jest.fn();
        wrapper = shallow(<UnconnectedInput guessWord = {guessWordMock} />);
        // add value to the  input box
        wrapper.setState({currentGuess: guessedWord});
        // simulate click on the button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
    });
    test('`guessWord` runs when submit button is clicked', () => {
        const guessWordMockCallCount = guessWordMock.mock.calls.length;
        expect(guessWordMockCallCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument', () => {
        const guessedWordArg = guessWordMock.mock.calls[0][0];
        expect(guessedWordArg).toBe(guessedWord);
    });
    test('input content is cleared after submit button is clicked', () => {
        expect(wrapper.state('currentGuess')).toBe('');
    });
});