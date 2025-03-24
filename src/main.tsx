import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RootProvider from "./common/providers/RootProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>
);
