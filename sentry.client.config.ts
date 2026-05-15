import * as Sentry from "@sentry/nextjs";

const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
const isProduction = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: sentryDsn,
  enabled: isProduction && Boolean(sentryDsn),
  tracesSampleRate: isProduction ? 0.1 : 0,

  debug: false,
});
