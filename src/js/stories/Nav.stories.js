import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, Nav, NavItem, NavLink } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Nav', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Navs.</h1>
    <Row>
      <Col>
        <Nav
          isFill={boolean('Fill', false)}
          isPills={boolean('Pills', false)}
          isTabs={boolean('Tabs', false)}
        >
          <NavItem>
            <NavLink isActive>First</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Second</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Third</NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  </Container>
));
