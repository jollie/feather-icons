import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconDivideCircle(props) {
  return (
    <Icon {...props}>
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
      <line x1="12" y1="8" x2="12" y2="8" />
      <circle cx="12" cy="12" r="10" />
    </Icon>
  );
}
