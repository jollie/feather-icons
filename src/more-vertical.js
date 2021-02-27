import React from 'react';
import Icon from '../icon';

/* eslint-disable react/jsx-props-no-spreading */
export default props => ((
  <Icon {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </Icon>
));
