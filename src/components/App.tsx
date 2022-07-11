// import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';

// import { store } from '../reducers/store';
import { NotFoundPage } from 'pages/notfound/NotFound';

import { ROUTE_MAINPAGE, ROUTE_NOTFOUND } from '../constants/routes';
import { Main } from '../pages/main/Main';

export const App = () => (
  <Sentry.ErrorBoundary fallback={<></>}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Switch>
        <Route key={ROUTE_MAINPAGE} exact path={ROUTE_MAINPAGE} component={Main} />
        <Route key={ROUTE_NOTFOUND} path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
    {/* </Provider> */}
  </Sentry.ErrorBoundary>
);
