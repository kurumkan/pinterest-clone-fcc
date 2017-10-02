import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';

import createRoutes from 'routes';
import configureStore from 'srore';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <Router
     routes={routes}
      history={history}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
);
