import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
  ItemContainer,
  ItemCheck,
  ItemName,
  ItemDelete,
} from './todoItemStyles';

describe('TodoItem components', () => {
  it('ItemContainer render successfully', () => {
    const tree = renderer.create(<ItemContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('ItemCheck render successfully', () => {
    const tree = renderer.create(<ItemCheck />).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('ItemName completed render successfully', () => {
    const tree = renderer.create(<ItemName completed/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('ItemName render successfully', () => {
    const tree = renderer.create(<ItemName />).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('ItemDelete render successfully', () => {
    const tree = renderer.create(<ItemDelete />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
