import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://5ea49d7f75284043846d680bf45b5d97@o345358.ingest.sentry.io/1965996",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
