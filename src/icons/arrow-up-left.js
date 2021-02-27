import React from 'react';
import Icon from '../icon';

/* eslint-disable react/jsx-props-no-spreading */
export default props => ((
  <Icon {...props}>
    <line x1="17" y1="17" x2="7" y2="7" />
    <polyline points="7 17 7 7 17 7" />
  </Icon>
));
