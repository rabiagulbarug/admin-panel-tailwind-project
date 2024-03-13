import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>Loading</div>}>
              <Outlet/>
          </Suspense>
      </QueryClientProvider>
  );
}

export default App;
