import React from 'react';
import { shallow } from 'enzyme';
import { PostCard, Icon } from '../../';

const setup = (overrides = {}) => {
  const props = {
    title: 'Hope For Children',
    date: '2018-08-22 14:34',
    content:
      'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
    campaign: {
      name: 'Campaign',
      color: '#ff0000',
    },
    inspirationActions: [
      {
        icon: 'follow',
        activeColor: '#0095f1',
        isActive: false,
        onClick: jest.fn(),
      },
      {
        icon: 'like',
        activeColor: '#f25270',
        isActive: true,
        onClick: jest.fn(),
      },
    ],
    ...overrides,
  };
  const wrapper = shallow(<PostCard {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<PostCard />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('post-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the draft prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('bg-light')).toBe(false);
    expect(wrapper.hasClass('border-gray-500')).toBe(false);

    wrapper.setProps({ isDraft: true });

    expect(wrapper.hasClass('bg-light')).toBe(true);
    expect(wrapper.hasClass('border-gray-500')).toBe(true);
  });

  it('should handle the invalid prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('border-danger')).toBe(false);

    wrapper.setProps({ isInvalid: true });

    expect(wrapper.hasClass('border-danger')).toBe(true);
  });

  it('should optionally display date', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.post-date').exists()).toBe(true);

    wrapper.setProps({ date: null });

    expect(wrapper.find('.post-date').exists()).toBe(false);
  });

  it('should handle the dateFormat prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.post-date').text()).toEqual('22 Aug at 14:34');

    wrapper.setProps({ dateFormat: 'HH:MM [on] DD-MM-YYYY' });

    expect(wrapper.find('.post-date').text()).toEqual('14:08 on 22-08-2018');
  });

  it('should handle the campaign prop', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.campaign-tag').prop('color')).toEqual(props.campaign.color);
    expect(wrapper.find('.campaign-tag').prop('children')).toEqual(props.campaign.name);
  });

  it('should optionally display the campaign tag', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.campaign-tag').exists()).toBe(true);

    wrapper.setProps({ campaign: null });

    expect(wrapper.find('.campaign-tag').exists()).toBe(false);
  });

  it('should handle the inspirationActions prop', () => {
    const follow = jest.fn();
    const like = jest.fn();
    const { wrapper } = setup({
      inspirationActions: [
        {
          icon: 'follow',
          activeColor: '#0095f1',
          isActive: false,
          onClick: follow,
        },
        {
          icon: 'like',
          activeColor: '#f25270',
          isActive: true,
          onClick: like,
        },
      ],
    });

    const inspirationActions = wrapper.find('.inspiration-actions').find(Icon);

    expect(inspirationActions).toHaveLength(2);

    expect(inspirationActions.at(0).prop('name')).toEqual('follow');
    expect(inspirationActions.at(0).prop('hoverColor')).toEqual('#343a40');
    expect(inspirationActions.at(1).prop('name')).toEqual('like');
    expect(inspirationActions.at(1).prop('color')).toEqual('#f25270');
    expect(inspirationActions.at(1).prop('hoverColor')).toEqual('#f25270');

    inspirationActions.at(0).simulate('click');
    inspirationActions.at(1).simulate('click');

    expect(follow).toHaveBeenCalledTimes(1);
    expect(like).toHaveBeenCalledTimes(1);
  });

  it('should optionall display inspirationActions', () => {
    const { wrapper } = setup({ inspirationActions: [{ icon: 'follow' }] });

    expect(wrapper.find('.inspiration-actions').exists()).toBe(true);

    wrapper.setProps({ inspirationActions: [] });

    expect(wrapper.find('.inspiration-actions').exists()).toBe(false);

    wrapper.setProps({ inspirationActions: null });

    expect(wrapper.find('.inspiration-actions').exists()).toBe(false);
  });
});
