import { SeverityNumber } from "@opentelemetry/api-logs";

import { posthogLogProvider } from "@/instrumentation";

const posthogLogger = posthogLogProvider?.getLogger("devevent-posthog-logs");

export function logEventDirectoryRendered(featuredEventCount: number) {
  posthogLogger?.emit({
    body: "Event directory rendered",
    severityNumber: SeverityNumber.INFO,
    attributes: {
      app_area: "event_directory",
      featured_event_count: featuredEventCount,
    },
  });

  posthogLogger?.emit({
    body: "Featured event catalogue prepared",
    severityNumber: SeverityNumber.DEBUG,
    attributes: {
      app_area: "event_directory",
      featured_event_count: featuredEventCount,
    },
  });
}

export async function flushPostHogLogs() {
  await posthogLogProvider?.forceFlush();
}
