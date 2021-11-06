import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store';

Sentry.init({
	dsn: "https://639320b4275b460ab5150234e270500d@o751667.ingest.sentry.io/5791706",
	integrations: [new Integrations.BrowserTracing()],
	release: process.env.REACT_APP_SENTRY_RELEASE,
	autoSessionTracking: true,
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
