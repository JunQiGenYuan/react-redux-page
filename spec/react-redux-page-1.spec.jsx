import React from 'react/addons';
import ReactReduxPage1 from '../lib/react-redux-page-1.jsx';

describe('ReactReduxPage1', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactReduxPage1/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-redux-page-1');
  });
});
