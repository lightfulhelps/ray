import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import Step from "./Step";

const setup = (overrides = {}) => {
  const props = merge({
    activeStep: 2,
    isLast: false,
    label: 'step one',
    onClick: jest.fn(),
    thisStep: 2,
    value: 2
  }, overrides);
  const wrapper = shallow(<Step {...props} />);

  return {
    wrapper,
    props
  };
};

describe('<Step />', () => {
  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  describe('active state', () => {
    it('should add appropriate classes if the `activeStep` prop is equal to the `thisStep` prop', () => {
      const {
        wrapper
      } = setup();

      expect(wrapper.html()).toContain('bg-primary text-white border-primary');
    });

    it('should render the label prop as the content if the `activeStep` prop is equal to the `thisStep` prop', () => {
      const {
        wrapper,
        props
      } = setup();

      expect(wrapper.find('Icon')).toHaveLength(0);
      expect(wrapper.text()).toContain(props.label);
    });
  });

  describe('todo state', () => {
    it('should add appropriate classes if the `thisStep` prop is greater than the `activeStep` prop', () => {
      const {
        wrapper
      } = setup({ activeStep: 1 });

      expect(wrapper.html()).toContain('bg-gray-400 border-gray-400 text-white');
    });

    it('should render the label prop as the content if the `activeStep` prop is less than the `thisStep` prop', () => {
      const {
        wrapper,
        props
      } = setup();

      expect(wrapper.find('Icon')).toHaveLength(0);
      expect(wrapper.text()).toContain(props.label);
    });
  });

  describe('done state', () => {
    it('should add appropriate classes if the `thisStep` prop is less than the `activeStep` prop', () => {
      const {
        wrapper
      } = setup({ thisStep: 1 });

      expect(wrapper.html()).toContain('bg-white border-primary');
    });

    it('render a tick icon if the `thisStep` prop is less than the `activeStep` prop', () => {
      const {
        wrapper
      } = setup({ thisStep: 1 });

      expect(wrapper.find('Icon')).toHaveLength(1);
    });
  });

  it('should call onClick on click', () => {
    const {
      wrapper,
      props
    } = setup();

    wrapper.find('[data-test-id="stepper-step"]').simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});