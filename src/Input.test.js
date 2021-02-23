import { shallow } from "enzyme";
import { storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    // We have to dive two times as the shallow Input without it will include the Provider and the App component
    const wrapper = shallow(<Input store = {store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

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