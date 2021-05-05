import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconCornerRightDown(props) {
  return (
    <Icon {...props}>
      <polyline points="10 15 15 20 20 15" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </Icon>
  );
}
