import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconCornerLeftUp(props) {
  return (
    <Icon {...props}>
      <polyline points="14 9 9 4 4 9" />
      <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </Icon>
  );
}
