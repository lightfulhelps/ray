import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
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
} from '../';
import sizes from './utils/sizes';

import '../../scss/ray.scss';
import FormPasswordInput from '../components/FormPasswordInput/FormPasswordInput';

const stories = storiesOf('Forms', module);

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

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Forms.</h1>
    <Row className="mb-4">
      <Col>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput isInvalid name="name" type="text" size={select('Select Size', sizes)} />
          <FormFeedback>This field is invalid</FormFeedback>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            placeholder="e.g. foo@bar.com"
            type="email"
            size={select('Select Size', sizes)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormPasswordInput size={select('Select Size', sizes)} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Select</FormLabel>
          <FormSelect
            isInvalid={boolean('Select Invalid', false)}
            onChange={action('Select change')}
            options={selectOptions}
            placeholder="Some placeholder text..."
            size={select('Select Size', sizes)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Multiple Select</FormLabel>
          <FormSelect
            isCreatable
            isMulti
            onChange={action('Multiple Select change')}
            options={selectOptions}
            size={select('Select Size', sizes)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Textarea</FormLabel>
          <FormTextarea name="textarea">Here is some textarea text</FormTextarea>
        </FormGroup>
        <FormGroup>
          <FormLabel>File</FormLabel>
          <FormInput type="file" name="file" />
        </FormGroup>
        <FormGroup>
          <FormGroup isCheck>
            <FormLabel isCheck>
              <FormInput name="radios" type="radio" /> Radio 1
            </FormLabel>
          </FormGroup>
          <FormGroup isCheck>
            <FormLabel isCheck>
              <FormInput name="radios" type="radio" /> Radio 2
            </FormLabel>
          </FormGroup>
          <FormGroup isCheck>
            <FormLabel isCheck>
              <FormInput name="radios" type="radio" disabled /> Radio 3 (disabled)
            </FormLabel>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <FormGroup isCheck>
            <FormLabel isCheck>
              <FormInput type="checkbox" /> I confirm this is a checkbox
            </FormLabel>
          </FormGroup>
        </FormGroup>
      </Col>
    </Row>
  </Container>
));
