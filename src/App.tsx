import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Suspense fallback={<div>Loading</div>}>
          <Outlet/>
      </Suspense>
  );
}

export default App;
