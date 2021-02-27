import React from 'react';
import Icon from '../icon';

/* eslint-disable react/jsx-props-no-spreading */
export default props => ((
  <Icon {...props}>
    <polyline points="9 14 4 9 9 4" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </Icon>
));
