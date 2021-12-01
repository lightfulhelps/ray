import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Container, Row, Col, Table } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);

const sizes = {
  Small: 'sm',
  Large: 'lg',
} as const;

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Table</h1>
    <Row>
      <Col>
        <Table
          isBordered={boolean('Bordered', false)}
          isBorderless={boolean('Borderless', false)}
          isStriped={boolean('Striped', false)}
          isHoverable={boolean('Hoverable', false)}
          isResponsive={boolean('Responsive', false)}
          size={select('Size', sizes, undefined)}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
));
