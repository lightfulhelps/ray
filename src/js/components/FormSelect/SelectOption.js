import * as React from 'react';
import { components } from 'react-select';
import Icon from '../Icon/Icon';

const { Option } = components;

const SelectOption = props => (
  <Option {...props}>
    {/* {console.log(props)} */}
    {props.data.icon && <Icon className="mr-1" name={props.data.icon} />}
    {props.label}
  </Option>
);

export default SelectOption;
