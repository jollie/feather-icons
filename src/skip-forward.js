import React from 'react';
import Icon from '../icon';

/* eslint-disable react/jsx-props-no-spreading */
export default props => ((
  <Icon {...props}>
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1="19" y1="5" x2="19" y2="19" />
  </Icon>
));
