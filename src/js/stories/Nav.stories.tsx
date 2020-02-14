import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Container, Row, Col, Nav, NavItem, NavLink } from "../";
import themes from "./utils/themes";

import "../../scss/ray.scss";

const stories = storiesOf('Nav', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => <Container>
    <h1 className="my-4">Nav</h1>
    <Row>
      <Col>
        <Nav isFill={boolean('Fill', false)} isPills={boolean('Pills', false)} isTabs={boolean('Tabs', true)}>
          <NavItem>
            <NavLink href="#" theme={select('Theme', themes, 'primary')} isActive={boolean('Active Link', true)}>
              First
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Second</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" isDisabled={boolean('Disabled Link', true)}>
              Third
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  </Container>);