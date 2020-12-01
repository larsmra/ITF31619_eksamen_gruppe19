import React from 'react';
import Routes from './routes/Router';

const App = () => {
  return(
      <>
        <header>
            <Navbar/>
            <Title title="Velkommen til FG Rørleggerservice AS"/>
        </header>
        <main>
            <Routes />
        </main>
      </>
  )
};


export default App;
