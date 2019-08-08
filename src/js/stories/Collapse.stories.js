import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Col, Collapse, Card } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Collapse</h1>
    <Row>
      <Col sm={6}>
        <p className="mb-4">
          The collapse component does not have any styling but you can apply any Bootstrap classes
          to change it&rsuo;s appearance. Here they are also displayed inside a Card component.
        </p>
        <Card className="shadow p-2">
          <Collapse className="pb-1 mb-1 border-bottom" defaultOpen label="Social profiles">
            <div>
              Commodo lectus a VHS urna vivamus mattis quisque VHS porttitor enim lectus rutrum
              organic eu sodales. Mauris nam +1 massa massa diam sapien San Francisco auctor mauris
              non eu vinyl sem pharetra.
            </div>
          </Collapse>
          <Collapse className="pb-1 mb-1 border-bottom" label="Labels">
            <div>
              Fixie eu congue auctor tellus cursus mauris curabitur noise-rock amet maecenas magna
              pharetra lectus integer donec bahn mi diam morbi. Risus morbi vulputate ornare sodales
              mustache elementum sodales porta eget maecenas massa adipiscing keytar amet sagittis
              porta leo.
            </div>
          </Collapse>
          <Collapse label="Stories">
            <div>
              DIY eu non nec congue quam leo lectus vinyl sem pharetra undefined ut tempus ligula
              amet artisan sodales. Nibh leo congue ipsum quisque enim indie lectus sapien nibh ut
              risus rutrum donec brunch proin cursus porttitor arcu duis.
            </div>
          </Collapse>
        </Card>
      </Col>
    </Row>
  </Container>
));
