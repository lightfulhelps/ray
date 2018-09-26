import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
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

import '../../scss/ray.scss';

const stories = storiesOf('Forms', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Forms.</h1>
    <Row className="mb-4">
      <Col>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput isInvalid name="name" type="text" />
          <FormFeedback>This field is invalid</FormFeedback>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput name="email" placeholder="e.g. foo@bar.com" type="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput name="password" type="password" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Select</FormLabel>
          <FormSelect>
            <option value="a">First</option>
            <option value="b">First</option>
            <option value="c">First</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>Multiple Select</FormLabel>
          <FormSelect multiple>
            <option value="a">First</option>
            <option value="b">First</option>
            <option value="c">First</option>
          </FormSelect>
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
