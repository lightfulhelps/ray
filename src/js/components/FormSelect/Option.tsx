import * as React from 'react';
import { components } from 'react-select';
import Icon from '../Icon/Icon';

const Option: React.FC = (props: any) => {
  const OptionComponent = components.Option as any;
  return (
    <OptionComponent {...props}>
      {props.data.icon && (
        <Icon className="me-1" name={props.data.icon} theme="gray-500" isActive />
      )}
      {props.label}
    </OptionComponent>
  );
};

export default Option;
