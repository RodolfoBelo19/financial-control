import './App.css';
import { Home } from './pages/home/index.tsx';
import { Welcome } from './pages/welcome/index.tsx';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <Home /> : <Welcome setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
}

export default App;
