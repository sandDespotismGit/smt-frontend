// import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';

// import { store } from '../reducers/store';
import { ROUTE_MAINPAGE } from '../constants/routes';
import { Main } from '../pages/main/Main';

export const App = () => (
  <Sentry.ErrorBoundary fallback={<></>}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Switch>
        <Route key={ROUTE_MAINPAGE} exact path={ROUTE_MAINPAGE} component={Main} />
      </Switch>
    </BrowserRouter>
    {/* </Provider> */}
  </Sentry.ErrorBoundary>
);
