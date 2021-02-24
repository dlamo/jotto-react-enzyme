import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

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
        test('renders component without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        });
    });
});
describe('updated state', () => {

});