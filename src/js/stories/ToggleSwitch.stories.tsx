import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';

import '../../scss/ray.scss';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    labelAlign: {
      control: 'select',
      options: ['left', 'right', 'bottom', 'top'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    isDisabled: false,
    label: 'Noice!',
    labelAlign: 'right',
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(args.checked !== undefined ? args.checked : true);

    return (
      <Container>
        <h1 className="my-6">ToggleSwitch</h1>
        <ToggleSwitch
          {...args}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </Container>
    );
  },
};
