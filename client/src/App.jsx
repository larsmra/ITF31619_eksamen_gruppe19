import React from 'react';
import AuthProvider from './context/AuthProvider';
import Theme from './styled/Theme';
import Routes from './routes/Routes';

const App = () => (
  <Theme>
    <AuthProvider>
    <Routes />
    </AuthProvider>
  </Theme>
 
);

export default App;
