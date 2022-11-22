import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
import translation from '../locale/i18n';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

const menuThemes = {
  Light: 'light',
  Dark: 'dark',
} as const;

const menuPositions = {
  Left: 'left',
  Right: 'right',
} as const;

const sizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
} as const;

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Dropdown</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          isBlock={boolean('Block', false)}
          render={(isOpen, onToggle) => (
            <>
              <DropdownToggle
                isBlock={boolean('Block', false)}
                isOpen={isOpen}
                onClick={onToggle}
                size={select('Size', sizes, 'md')}
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu
                isOpen={isOpen}
                onClick={onToggle}
                position={select('Menu Position', menuPositions, 'left')}
                theme={select('Menu Theme', menuThemes, 'light')}
              >
                <DropdownItem onClick={action('Edit')}>
                  <Icon className="me-1" name="edit" />
                  Edit
                </DropdownItem>
                <DropdownItem onClick={action('Comment')}>
                  <Icon className="me-1" name="comment" />
                  Comment
                </DropdownItem>
                <DropdownItem isDisabled onClick={action('Edit')}>
                  <Icon className="me-1" name="delete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </>
          )}
        />
      </div>
      <div className="col-6">
        <Dropdown
          render={(isOpen, onToggle) => (
            <>
              <Button
                icon="menu"
                theme="primary"
                isOutline
                onClick={onToggle}
                size={select('Size', sizes, 'md')}
              />
              <DropdownMenu
                isOpen={isOpen}
                onClick={onToggle}
                position={select('Menu Position', menuPositions, 'left')}
                theme={select('Menu Theme', menuThemes, 'light')}
                footer={text('Menu Footer', translation.t('dropdown:footer'))}
              >
                <DropdownItem isHeader>Header</DropdownItem>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem isHeader>Header</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
                <DropdownItem>Option 4</DropdownItem>
              </DropdownMenu>
            </>
          )}
        />
      </div>
    </Row>
  </Container>
));
