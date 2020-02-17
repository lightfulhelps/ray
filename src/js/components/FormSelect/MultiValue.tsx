import React from 'react';
import { Tag } from '../../';

const MultiValue: React.FC = (props: any) => (
  <Tag onRemove={props.removeProps.onClick} theme="gray-800">
    {props.children}
  </Tag>
);

export default MultiValue;
