import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import packageInfo from '../package.json';
import { ENVIRONMENT, SENTRY_DSN } from './constants/env';
import { App } from './components/App';
import { theme } from './styles/theme';

import "@fontsource/open-sans";
import './styles/main.scss';

Sentry.init({
  enabled: !!SENTRY_DSN,
  dsn: SENTRY_DSN,
  release: `${packageInfo.name}@${packageInfo.version}`,
  environment: ENVIRONMENT,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  normalizeDepth: 10,
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
