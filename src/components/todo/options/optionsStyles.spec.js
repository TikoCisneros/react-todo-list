import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
  OptionsContainer,
  OptionsButton,
  DropDown,
} from './optionsStyles';

describe('Options components', () => {
  it('OptionsContainer render successfully', () => {
    const tree = renderer.create(<OptionsContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('OptionsButton render successfully', () => {
    const tree = renderer.create(<OptionsButton />).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('DropDown completed render successfully', () => {
    const tree = renderer.create(<DropDown />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
