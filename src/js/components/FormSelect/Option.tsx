import * as React from "react";
import { components } from "react-select";
import Icon from "../Icon/Icon";

const Option = props => <components.Option {...props}>
    {props.data.icon && <Icon className="mr-1" name={props.data.icon} theme="gray-500" isActive />}
    {props.label}
  </components.Option>;

export default Option;