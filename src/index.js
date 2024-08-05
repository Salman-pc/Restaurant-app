import React from "react";
import { createRoot } from "react-dom/client";
import Myapp from "./App";

// Get the root element from the HTML
const container = document.getElementById("root");

// Create a root instance
const root = createRoot(container);

// Render the application
root.render(<Myapp />);
