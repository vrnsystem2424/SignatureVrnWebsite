"use client";

import { useEffect } from "react";

export default function RouteLock() {
  useEffect(() => {
    // History me extra state push karo taaki back button kaam na kare
    const lockRoute = () => {
      window.history.pushState(null, "", window.location.href);
    };

    lockRoute();

    const handlePopState = () => {
      // Jab koi back kare, wapas same page par push kar do
      lockRoute();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}