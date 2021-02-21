import App from './App';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';

const setup = (props = {}) => {
  return shallow(<App {...props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
