import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <h1>My first React app</h1>
    </header>
    <App />
  </StrictMode>,
);
