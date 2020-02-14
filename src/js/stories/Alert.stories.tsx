import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Container, Row, Col, Alert } from "../";
import themes from "./utils/themes";

import "../../scss/ray.scss";

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => <Container>
    <h1 className="my-4">Alert</h1>
    <Row>
      <Col>
        <Alert className="mb-2" theme={select('Theme', themes, 'primary')}>
          A simple alert—check it out!
        </Alert>
        <Alert theme={select('Theme', themes, 'primary')}>
          <h4 className="alert-heading">Well done!</h4>An alert with a heading!
        </Alert>
      </Col>
    </Row>
  </Container>);