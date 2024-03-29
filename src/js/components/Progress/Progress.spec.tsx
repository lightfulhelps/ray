import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Progress from './Progress';

const setup = (overrides = {}) => {
  const props = merge({ value: 0 }, overrides);
  const wrapper = shallow(<Progress {...props} />);

  return { wrapper, props };
};

describe('<Progress />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('progress')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the isAnimated prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-animated')).toBe(
      false
    );

    wrapper.setProps({ isAnimated: true });

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-animated')).toBe(
      true
    );
  });

  it('should handle the isStriped prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-striped')).toBe(
      false
    );

    wrapper.setProps({ isStriped: true });

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-striped')).toBe(
      true
    );
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-primary')).toBe(true);

    wrapper.setProps({ theme: 'secondary' });

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-secondary')).toBe(true);
  });

  it('should handle the value prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress-bar"]').prop('style').width).toBe('0%');

    wrapper.setProps({ value: 30 });

    expect(wrapper.find('[data-test-id="progress-bar"]').prop('style').width).toBe('30%');
  });

  it('should handle the small size prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress"]').prop('style').height).toBe('1.25rem');
    expect(wrapper.find('[data-test-id="progress"]').prop('style').fontSize).toBe('0.75rem');

    wrapper.setProps({ size: 'sm' });

    expect(wrapper.find('[data-test-id="progress"]').prop('style').height).toBe('0.5rem');
    expect(wrapper.find('[data-test-id="progress"]').prop('style').fontSize).toBe('0.5rem');
  });
  it('should handle the large size prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress"]').prop('style').height).toBe('1.25rem');
    expect(wrapper.find('[data-test-id="progress"]').prop('style').fontSize).toBe('0.75rem');

    wrapper.setProps({ size: 'lg' });

    expect(wrapper.find('[data-test-id="progress"]').prop('style').height).toBe('1.5rem');
    expect(wrapper.find('[data-test-id="progress"]').prop('style').fontSize).toBe('1rem');
  });

  it('should change to bg-danger when value is greater than 100', () => {
    const { wrapper } = setup({ value: 25 });

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-danger')).toBe(false);

    wrapper.setProps({ value: 101 });

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-danger')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
