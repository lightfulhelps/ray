import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
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
          isBlock={boolean('Block', false)}
          render={(isOpen, onToggle) => (
            <React.Fragment>
              <DropdownToggle isBlock={boolean('Block', false)} isOpen={isOpen} onClick={onToggle}>
                Dropdown
              </DropdownToggle>
              <DropdownMenu
                isOpen={isOpen}
                onClick={onToggle}
                position={select('Menu Position', menuPositions, 'left')}
                theme={select('Menu Theme', menuThemes, 'light')}
              >
                <DropdownItem onClick={action('Edit')}>
                  <Icon className="mr-1" name="edit" />
                  Edit
                </DropdownItem>
                <DropdownItem onClick={action('Comment')}>
                  <Icon className="mr-1" name="comment" />
                  Comment
                </DropdownItem>
                <DropdownItem isDisabled onClick={action('Edit')}>
                  <Icon className="mr-1" name="edit" />
                  Delete
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
                <DropdownItem isHeader>Header</DropdownItem>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem isHeader>Header</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
                <DropdownItem>Option 4</DropdownItem>
              </DropdownMenu>
            </React.Fragment>
          )}
        />
      </div>
    </Row>
  </Container>
));
