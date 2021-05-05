import React from 'react';

const Sizes = {
  xs: 12,
  sm: 16,
  base: 20,
  lg: 24,
  xl: 28,
  '2xl': 36,
  '3xl': 48,
  '4xl': 64,
  '5xl': 96,
};

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
export default function Icon({
  fill = 'none',
  size = 'base',
  strokeWidth = 2,
  ...rest
}) {
  const width = Sizes[size] || size;

  return (
    <svg
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      height={width}
      width={width}
      {...rest}
    />
  );
}
