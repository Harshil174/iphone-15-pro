import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://b7ed1429537a9649af96d342a637254b@o4507895173939200.ingest.us.sentry.io/4507895179771904",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
