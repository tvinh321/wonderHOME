// import React from "react";
// import { render } from "react-dom";
// import { App } from "./routes";
// render(<App />, document.getElementById("app"));

import { createRoot } from 'react-dom/client';
import { App } from './routes';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);