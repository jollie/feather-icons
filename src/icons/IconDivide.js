import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconDivide(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="6" r="2" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <circle cx="12" cy="18" r="2" />
    </Icon>
  );
}

