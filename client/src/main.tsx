import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Buffer } from 'buffer'
window.Buffer = Buffer;

// Mount the app to the root element
createRoot(document.getElementById("root")!).render(<App />);
