import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Collapse from './Collapse';

const setup = (overrides = {}) => {
  const props = merge(
    {
      label: 'Click me',
    },
    overrides
  );
  const wrapper = shallow(<Collapse {...props} />);

  return { wrapper, props };
};

describe('<Collapse />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  it('should toggle display of children', () => {
    const { wrapper } = setup({ children: <div>My test content</div> });

    expect(wrapper.find('[data-test-id="collapse_children_Click me"]')).toHaveLength(0);

    wrapper.find('[data-test-id="collapse_toggle_Click me"]').simulate('click');

    expect(wrapper.find('[data-test-id="collapse_children_Click me"]')).toHaveLength(1);

    wrapper.find('[data-test-id="collapse_toggle_Click me"]').simulate('click');

    expect(wrapper.find('[data-test-id="collapse_children_Click me"]')).toHaveLength(0);
  });

  it('should toggle icon', () => {
    const { wrapper } = setup();

    expect(
      wrapper
        .find('[data-test-id="collapse_toggle_Click me"]')
        .find('Icon')
        .prop('name')
    ).toEqual('chevronDown');

    wrapper.find('[data-test-id="collapse_toggle_Click me"]').simulate('click');

    expect(
      wrapper
        .find('[data-test-id="collapse_toggle_Click me"]')
        .find('Icon')
        .prop('name')
    ).toEqual('chevronUp');

    wrapper.find('[data-test-id="collapse_toggle_Click me"]').simulate('click');

    expect(
      wrapper
        .find('[data-test-id="collapse_toggle_Click me"]')
        .find('Icon')
        .prop('name')
    ).toEqual('chevronDown');
  });

  it('should be open if defaultOpen is true', () => {
    const { wrapper } = setup({ defaultOpen: true });

    expect(wrapper.find('[data-test-id="collapse_children_Click me"]')).toHaveLength(1);
  });
});
