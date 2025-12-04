import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormInput,
  FormFeedback,
  FormSelect,
  FormTextarea,
  Avatar,
} from '../';
import sizes from './utils/sizes';

import '../../scss/ray.scss';
import FormPasswordInput from '../components/FormPasswordInput/FormPasswordInput';

const selectSizes = {
  Small: 'sm',
  Large: 'lg',
} as const;

const selectOptions = [
  {
    label: 're',
    value: 're',
    icon: 'tag',
  },
  {
    label: 'act',
    value: 'act',
    icon: 'tag',
  },
  {
    label: 'sel',
    value: 'sel',
    icon: 'tag',
  },
  {
    label: 'ect',
    value: 'ect',
    icon: 'tag',
  },
];

const meta: Meta<typeof FormInput> = {
  title: 'Forms',
  component: FormInput,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  render: () => (
  <Container>
    <h1 className="my-6">Forms</h1>
    <Row className="mb-5">
      <Col>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput
            isInvalid
            name="name"
            type="text"
            size="md"
          />
          <FormFeedback>This field is invalid</FormFeedback>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            placeholder="e.g. foo@bar.com"
            type="email"
            size={undefined}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormPasswordInput size={undefined} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Select</FormLabel>
          <FormSelect
            isInvalid={false}
            onChange={() => console.log('console.log', 'Select change')}
            options={selectOptions}
            placeholder="Some placeholder text..."
            size={undefined}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Multiple Select</FormLabel>
          <FormSelect
            isCreatable
            isMulti
            onChange={() => console.log('console.log', 'Multiple Select change')}
            options={selectOptions}
            size={undefined}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Textarea</FormLabel>
          <FormTextarea name="textarea">Here is some textarea text</FormTextarea>
        </FormGroup>
        <FormGroup>
          <FormLabel>File</FormLabel>
          <div>
            <FormInput type="file" name="file" />
          </div>
        </FormGroup>
        <FormGroup className="bg-white p-3 rounded-sm border">
          <FormGroup className="mb-1" isCheck>
            <FormInput name="radios" type="radio" id="radio1" />
            <FormLabel isCheck htmlFor="radio1">
              Radio 1
            </FormLabel>
          </FormGroup>
          <FormGroup className="mb-1" isCheck>
            <FormInput name="radios" type="radio" id="radio2" />
            <FormLabel isCheck htmlFor="radio2">
              Radio 2
            </FormLabel>
          </FormGroup>
          <FormGroup isCheck>
            <FormInput name="radios" type="radio" id="radio3" disabled />
            <FormLabel isCheck htmlFor="radio3">
              Radio 3 (disabled)
            </FormLabel>
          </FormGroup>
        </FormGroup>
        <FormGroup className="bg-white p-3 rounded-sm border">
          <FormGroup className="mb-1" isCheck>
            <FormInput type="checkbox" id="checkbox1" />
            <FormLabel isCheck htmlFor="checkbox1">
              Checkbox 1
            </FormLabel>
          </FormGroup>
          <FormGroup className="mb-1" isCheck>
            <FormInput type="checkbox" id="checkbox2" disabled />
            <FormLabel isCheck htmlFor="checkbox2">
              Checkbox 2 (disabled)
            </FormLabel>
          </FormGroup>
          <FormGroup className="mb-3" isCheck>
            <FormInput type="checkbox" id="checkbox3" />
            <FormLabel isCheck htmlFor="checkbox3">
              Checkbox 3
            </FormLabel>
          </FormGroup>
          <FormGroup isCheck>
            <FormInput type="checkbox" id="checkbox4" />
            <FormLabel isCheck htmlFor="checkbox4">
              <div className="d-flex align-items-center">
                <div style={{ width: '50px', height: '50px' }}>
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/30.jpg"
                    provider="facebook"
                  />
                </div>
                <div className="ms-1">Checkbox with markup</div>
              </div>
            </FormLabel>
          </FormGroup>
        </FormGroup>
      </Col>
    </Row>
  </Container>
  ),
};
