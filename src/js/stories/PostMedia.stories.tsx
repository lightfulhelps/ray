import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, PostMedia } from '../';

import '../../scss/ray.scss';

const meta: Meta<typeof PostMedia> = {
  title: 'PostMedia',
  component: PostMedia,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof PostMedia>;

export const Default: Story = {
  render: () => (
  <Container>
    <h1 className="my-6">PostMedia</h1>
    <Row>
      <Col className="mb-3" md={6} lg={4}>
        <div className="shadow" style={{ height: '170px' }}>
          <PostMedia media={[]} />
        </div>
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <div className="shadow" style={{ height: '170px' }}>
          <PostMedia
            media={[
              { type: 'video', url: 'https://cdn.filestackcontent.com/CyicFureSgWSlpL3zdsx' },
            ]}
          />
        </div>
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <div className="shadow" style={{ height: '170px' }}>
          <PostMedia
            media={[
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80',
              },
            ]}
          />
        </div>
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <div className="shadow" style={{ height: '170px' }}>
          <PostMedia
            media={[
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80',
              },
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80',
              },
            ]}
          />
        </div>
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <div className="shadow" style={{ height: '170px' }}>
          <PostMedia
            media={[
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80',
              },
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80',
              },
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80',
              },
            ]}
          />
        </div>
      </Col>
      <Col className="mb-3" md={6} lg={4}>
        <div className="shadow" style={{ height: '170px' }}>
          <PostMedia
            media={[
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80',
              },
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80',
              },
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80',
              },
              {
                type: 'image',
                url:
                  'https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=2251&q=80',
              },
            ]}
          />
        </div>
      </Col>
    </Row>
  </Container>
  ),
};
