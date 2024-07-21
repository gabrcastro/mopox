"use client";

import App from "./pages/app";
import StoreProvider from "./store.provider";

export default function Home() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}
