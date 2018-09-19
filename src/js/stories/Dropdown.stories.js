import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs/dist/vue';
import {
  Container,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Icon,
} from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

const menuThemes = {
  light: 'Light',
  dark: 'Dark',
};

const menuPositions = {
  left: 'Left',
  right: 'Right',
};

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          render={(isOpen, onToggle) => (
            <React.Fragment>
              <DropdownToggle isOpen={isOpen} onClick={onToggle}>
                Dropdown
              </DropdownToggle>
              <DropdownMenu
                isOpen={isOpen}
                onClick={onToggle}
                position={select('Menu Position', menuPositions, 'left')}
                theme={select('Menu Theme', menuThemes, 'light')}
              >
                <DropdownItem isHeader>Header</DropdownItem>
                <DropdownItem onClick={action('Edit')}>
                  <Icon className="mr-1" name="edit" />
                  Edit
                </DropdownItem>
                <DropdownItem isDisabled onClick={action('Edit')}>
                  <Icon className="mr-1" name="edit" />
                  Disabled
                </DropdownItem>
              </DropdownMenu>
            </React.Fragment>
          )}
        />
      </div>
      <div className="col-6">
        <Dropdown
          render={(isOpen, onToggle) => (
            <React.Fragment>
              <Button icon="menu" theme="light" onClick={onToggle} />
              <DropdownMenu
                isOpen={isOpen}
                onClick={onToggle}
                position={select('Menu Position', menuPositions, 'left')}
                theme={select('Menu Theme', menuThemes, 'light')}
                footer={text('Menu Footer', 'Created by: Bruno')}
              >
                <DropdownItem onClick={action('Edit')}>Edit</DropdownItem>
                <DropdownItem onClick={action('Delete')}>Delete</DropdownItem>
              </DropdownMenu>
            </React.Fragment>
          )}
        />
      </div>
    </Row>
  </Container>
));
