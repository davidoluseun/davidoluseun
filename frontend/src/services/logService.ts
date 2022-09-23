import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://54af397869e848098ea753eaad0b0c71@o494447.ingest.sentry.io/6771670",
  integrations: [new BrowserTracing()],

  tracesSampleRate: 1.0,
});

function log(ex: any) {
  Sentry.captureException(ex);
}

const logger = { log };

export default logger;
