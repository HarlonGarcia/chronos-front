import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes.tsx';
import './index.css';
import { queryClient } from './api/queryClient.ts';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </GlobalProvider>
  </React.StrictMode>,
);
