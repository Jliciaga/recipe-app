import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Root from './Root';

const stories = storiesOf('Root', module)
    .addDecorator(centered);

stories.add(
    'Default',
    () => (<Root/>),
);
