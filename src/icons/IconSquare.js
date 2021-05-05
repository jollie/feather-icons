import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconSquare(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </Icon>
  );
}
