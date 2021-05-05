import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconMapPin(props) {
  return (
    <Icon {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

