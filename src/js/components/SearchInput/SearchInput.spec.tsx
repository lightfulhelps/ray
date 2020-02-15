import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import SearchInput from './SearchInput';

const setup = (overrides = {}) => {
  const props = merge(
    {
      onChange: jest.fn(),
      onSearch: jest.fn(),
    },
    overrides
  );
  const wrapper = shallow(<SearchInput {...props} />);

  return { wrapper, props };
};

describe('<SearchInput />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('search-input')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle onChange', () => {
    const { wrapper, props } = setup();

    wrapper.find('[data-test-id="search-input"]').simulate('change', { target: { value: 'Test' } });

    expect(props.onChange).toHaveBeenCalledWith({ target: { value: 'Test' } });
  });

  describe('onSearch', () => {
    it('should call onSearch on button click', () => {
      const { wrapper, props } = setup();

      wrapper.find('[data-test-id="search-input-button"]').simulate('click');

      expect(props.onSearch).toHaveBeenCalledTimes(1);
    });

    it('should call onSearch with event on Enter keypress', () => {
      const { wrapper, props } = setup();

      wrapper.find('[data-test-id="search-input"]').simulate('keyPress', { key: 'a' });

      expect(props.onSearch).toHaveBeenCalledTimes(0);

      wrapper.find('[data-test-id="search-input"]').simulate('keyPress', { key: 'Enter' });

      expect(props.onSearch).toHaveBeenCalledTimes(1);
      expect(props.onSearch).toHaveBeenCalledWith({ key: 'Enter' });
    });
  });

  it('should handle placeholder', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="search-input"]').prop('placeholder')).toEqual('Search...');

    wrapper.setProps({ placeholder: 'Search here...' });

    expect(wrapper.find('[data-test-id="search-input"]').prop('placeholder')).toEqual(
      'Search here...'
    );
  });

  it('should handle value', () => {
    const { wrapper } = setup({ value: 'Test' });

    expect(wrapper.find('[data-test-id="search-input"]').prop('value')).toEqual('Test');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
