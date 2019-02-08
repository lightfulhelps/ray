import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Step from './Step';

const setup = (overrides = {}) => {
  const props = merge({
    activeStep: 2,
    isLast: false,
    label: 'step one',
    thisStep: 2,
    value: 2,
    ...overrides,
  });
  const wrapper = shallow(<Step {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Step />', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render line element on all but the last child', () => {
    const { wrapper } = setup({ isLast: false });
    expect(wrapper.find('.line')).toHaveLength(1);
  });
  it('should not render line element on the last child', () => {
    const { wrapper } = setup({ isLast: true });
    expect(wrapper.find('.line')).toHaveLength(0);
  });

  describe('active state', () => {
    it('should add `active` class if the `activeStep` prop is equal to the `thisStep` prop', () => {
      const { wrapper } = setup();
      expect(wrapper.html()).toContain('stepper__step--active');
    });
    it('should render the label prop as the content if the `activeStep` prop is equal to the `thisStep` prop', () => {
      const { wrapper, props } = setup();
      expect(wrapper.find('Icon')).toHaveLength(0);
      expect(wrapper.find('span').text()).toContain(props.label);
    });
  });

  describe('todo state', () => {
    it('should add `todo` class if the `activeStep` prop is less than the `thisStep` prop', () => {
      const { wrapper } = setup({ activeStep: 1 });
      expect(wrapper.html()).toContain('stepper__step--todo');
    });
    it('should render the label prop as the content if the `activeStep` prop is less than the `thisStep` prop', () => {
      const { wrapper, props } = setup();
      expect(wrapper.find('Icon')).toHaveLength(0);
      expect(wrapper.find('span').text()).toContain(props.label);
    });
  });

  describe('done state', () => {
    it('should to not add any classNames if the `thisStep` prop is less than the `activeStep` prop', () => {
      const { wrapper } = setup({ thisStep: 1 });
      expect(wrapper.html()).not.toContain('stepper__step--todo');
      expect(wrapper.html()).not.toContain('stepper__step--active');
    });
    it('render a tick icon if the `thisStep` prop is less than the `activeStep` prop', () => {
      const { wrapper } = setup({ thisStep: 1 });
      expect(wrapper.find('Icon')).toHaveLength(1);
    });
  });
});
