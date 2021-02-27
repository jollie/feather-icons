import React from 'react';
import Icon from '../icon';

/* eslint-disable react/jsx-props-no-spreading */
export default props => ((
  <Icon {...props}>
    <polyline points="10 9 15 4 20 9" />
    <path d="M4 20h7a4 4 0 0 0 4-4V4" />
  </Icon>
));
