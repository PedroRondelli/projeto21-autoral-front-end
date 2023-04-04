import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://skdcrombwobpyphkapjn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrZGNyb21id29icHlwaGthcGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2MTQxMjgsImV4cCI6MTk5NjE5MDEyOH0.tRHhnhq3GyniGZ6ECEqsKC-g3uMM33BUJerZ_G_fj0k");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase} >
    <App />
    </SessionContextProvider  >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
