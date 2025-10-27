import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define a full interface for fbq (function + properties)
interface FbqFunction {
  (...args: [string, ...unknown[]]): void;
  callMethod?: (...args: [string, ...unknown[]]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
}

// Extend global Window type
declare global {
  interface Window {
    fbq?: FbqFunction;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    if (window.fbq) return; // Already initialized

    // Load the Facebook Pixel script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    // Initialize fbq function
    const fbq = function (...args: [string, ...unknown[]]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        (fbq.queue = fbq.queue || []).push(args);
      }
    } as FbqFunction;

    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    window.fbq = fbq;

    // Initialize and track PageView
    window.fbq("init", "1298951935246236");
    window.fbq("track", "PageView");
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1298951935246236&ev=PageView&noscript=1"
        alt="facebook pixel"
      />
    </noscript>
  );
}

export function MetaPixelRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
}