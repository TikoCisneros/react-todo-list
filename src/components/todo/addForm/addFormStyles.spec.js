import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormInput } from './addFormStyles';

describe('Add Form components', () => {
  it('FormInput render successfully', () => {
    const tree = renderer.create(<FormInput />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
