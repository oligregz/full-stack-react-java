import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

const App = () => {
  return (
    <div>
      <AuthProvider >
        <RoutesApp />
      </AuthProvider>
    </div>
  )
}

export default App;