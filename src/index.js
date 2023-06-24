import React from 'react';
import { createRoot } from 'react-dom/client';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import './assets/css/views/index.css';

createRoot(
    document.getElementById('root')
).render(
    // <React.StrictMode>
        <App></App>
    // </React.StrictMode>
);
// serviceWorkerRegistration.register();

// reportWebVitals();
