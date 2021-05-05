import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconMinusSquare(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </Icon>
  );
}
