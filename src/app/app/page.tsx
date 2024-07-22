"use client";

import StoreProvider from "../store.provider";
import App from "./app";

export default function AppPage() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}
