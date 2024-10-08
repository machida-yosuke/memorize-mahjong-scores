import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./app";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element");
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
