import React from 'react';
import Icon from '../icon';

/* eslint-disable react/jsx-props-no-spreading */
export default props => ((
  <Icon {...props}>
    <polyline points="14 15 9 20 4 15" />
    <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  </Icon>
));
