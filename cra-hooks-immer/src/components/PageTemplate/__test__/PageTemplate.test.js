import React from 'react';
import {create} from 'react-test-renderer'; 
import PageTemplate from '../PageTemplate';

it('renders correctly', () => {
  let element = create(<PageTemplate>test</PageTemplate>);
  expect(element.toJSON()).toMatchSnapshot();

  element.update(<PageTemplate>test2</PageTemplate>);
  expect(element.toJSON()).toMatchSnapshot();
});