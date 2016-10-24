# react-redux-page
Supply for the react-redux SPA that a page container to manage page special state.

## Installation
To install:
```
npm install --save react-redux-page
```

## Why Do I Need This?
If you are using react,redux,react-redux and react-router to create a SPA.
You may want make some part of state just relative to a special page, instead drop it in the global state.
Which you want package the reducer, actions, component and container to the same page which will not share in the whole app.
Then you need this.


## Usage
### create reducers
```
import { combineReducers } from 'redux';
import { reducer as PageReducer } from 'ReactReduxPage';

const reducers = {
  pages: PageReducer,
  /*...otherReducers*/
};
const combined = combineReducers(reducers);

export default combined;
```

### bind the middleware
```
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { createPageMiddleware } from 'react-redux-page';

const middlewares = applyMiddleware(createPageMiddleware /*, ...other middlewares*/);

const store = createStore(reducers, initialState, middlewares);

export default store;
```

### connect page
```
...

import { connectPage } from '../../../ReactReduxPage';

class PageComponent extends React.Component {
  ...
  render() {
    //access the page special state va this.props.page
    const {page} = this.props;
    ...
    return (...);
  }
}

const initialState = {...};

const PageComponentConnected = connectPage(
  (state=initialState, action) => {
    //the reducer of this page
  },
  (state) => {
    //map the state to props
    //if no other state need to map to props, then pass null
    //check for react-redux/connect mapStateToProps
  },
  () => {
    //same as react-redux/connect mapActionsToProps
  }
)(pureComponent(PageComponent));

export default PageComponentConnected;
```

That all.

## Note that
One time *connectPage* create one page state, which means that all instance of this connected component share the same state.
So if you need more then one page with a component, you may *connectPage* multiple times.


## How it work?
### store all pages state
It store all pages special state in pages of root store state, which means you can get it by:
```
store.getState().pages
```
and a special page with id of "page1" state:
```
store.getState().page1
```

### connectPage
You connect the *mapStateToProps*, *actions* and *page reducer* to a Component.
This will generate an Id for the connected Page Component, bind all these things work together and return a connected redux container.
And the *connectPage* will bind page state to *page* of the props, which can access in the component by: ``` this.props.page ```.

### preprocess page actions in pageMiddleware
All actions will be binded *_pageId* and *_reducer* attributes automatically.

### process action by reducer
PageReducer will pick the *_reducer*(carried by action) to process page actions with the right page state;
