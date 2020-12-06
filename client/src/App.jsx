import React from 'react';
import AuthProvider from './context/AuthProvider';
import Routes from './routes/Routes';

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
