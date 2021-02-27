[![Version](https://img.shields.io/npm/v/@jollie/feather-icons)](https://www.npmjs.com/package/@jollie/feather-icons)
[![Licence](https://img.shields.io/npm/l/@jollie/feather-icons)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/thejellyfish/feather-icons)](https://travis-ci.org/github/thejellyfish/feather-icons)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/feather-icons)](https://codecov.io/gh/thejellyfish/feather-icons)
[![Downloads](https://img.shields.io/npm/dt/@jollie/feather-icons)](https://www.npmjs.com/package/@jollie/feather-icons)


# Feather icons

Feather SVG icons for React.    
To search an icon, see https://feathericons.com    

### Install

```bash
yarn add @jollie/feather-icons
```

or

```bash
npm install @jollie/feather-icons
```

### Usage

```javascript
import React from 'react';
import { IconEdit, IconTrash } from '@jollie/feather-icons';

export default function UsersList({ data }) {
  return (
    <h2>Users list</h2>
    <table>
      <tr>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      {data.map(({ email }) => (
        <tr key={email}>
          <td>{email}</td>
          <td>
            <button type="button">
              <IconEdit style={{ color: 'blue' }} />
            </button>
            <button type="button">
              <IconTrash style={{ color: 'red' }} />
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

// Sizing
const FeatherXL = () => <IconFeather size="xl" />;

// Tailwindcss
const IconTailwindClass = () => <IconTrash className="text-red-700" />;
```

### Params

| Prop         | Type                  | Default                               |
|:-------------|:----------------------|:--------------------------------------|
| `size`       | `string` or `integer` | `base` predefined size or pixel value | 
| `strokeWidth`| `integer`             | `2`                                   |
| `fill`       | `string`              | `none`                                |

### Predefined sizes
   
`xs` `sm` `base` `lg` `xl` `2xl` `3xl` `4xl` `5xl` 


![sizes](https://github.com/thejellyfish/feather-icons/raw/master/icon-sizes.png)
