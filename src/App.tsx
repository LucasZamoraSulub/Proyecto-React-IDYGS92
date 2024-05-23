import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Layout/Header';
import PersistentDrawerLeft from './components/Layout/LateralMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar></ResponsiveAppBar>
      </header>
      <main>
        <PersistentDrawerLeft></PersistentDrawerLeft>
        {/* Coloca aquí el contenido principal */}
      </main>
    </div>
  );
}

export default App;
