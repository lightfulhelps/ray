import React from 'react';
import { Icon } from '../..';

const ClearIndicator: React.FC = ({ innerProps }) => (
  <Icon {...innerProps} name="close" title="Clear" theme="gray-500" />
);

export default ClearIndicator;
