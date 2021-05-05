import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconBattery(props) {
  return (
    <Icon {...props}>
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
      <line x1="23" y1="13" x2="23" y2="11" />
    </Icon>
  );
}
