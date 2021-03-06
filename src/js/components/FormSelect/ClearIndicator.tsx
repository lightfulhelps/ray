import React from 'react';
import { Icon } from '../..';

type Props = {
  innerProps: any;
};

const ClearIndicator: React.FC<Props> = ({ innerProps }) => (
  <Icon {...innerProps} name="close" title="Clear" theme="gray-500" />
);

export default ClearIndicator;
