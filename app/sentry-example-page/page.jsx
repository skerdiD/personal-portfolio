"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Monitoring Diagnostic</title>
        <meta
          name="description"
          content="Trigger a controlled monitoring event for the portfolio."
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "14px 0" }}>
          Monitoring Diagnostic
        </h1>

        <p>Send a controlled event to verify portfolio error monitoring.</p>
        <button
          type="button"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#AD6CAA",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
          }}
          onClick={() => {
            Sentry.startSpan({
              name: "Portfolio Monitoring Diagnostic",
              op: "diagnostic",
            }, async () => {
              const res = await fetch("/api/sentry-example-api");
              if (!res.ok) {
                throw new Error("Portfolio monitoring diagnostic frontend error");
              }
            });
          }}
        >
          Send diagnostic event
        </button>

        <p>
          Check the configured monitoring project to confirm the event arrived.
        </p>
        <p style={{ marginTop: "24px" }}>
          For more information, see{" "}
          <a href="https://docs.sentry.io/platforms/javascript/guides/nextjs/">
            https://docs.sentry.io/platforms/javascript/guides/nextjs/
          </a>
        </p>
      </main>
    </div>
  );
}
