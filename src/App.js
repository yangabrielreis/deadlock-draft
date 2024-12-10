import React from 'react';
import './App.css';
import logo from './images/deadlock2.png';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import NewDraft from './new-draft';
import TrueDraft from './true-draft';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    isHomePage && (
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <div>
          <Link to="/new-draft">
            <button>Novo Draft</button>
          </Link>
        </div>
        <div>
          <Link to="/true-draft">
            <button>Entrar em Draft</button>
          </Link>
        </div>
        <div>
          <button>Analisar Estatísticas</button>
        </div>
      </header>
    )
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/new-draft" element={<NewDraft />} />
            <Route path="/true-draft" element={<TrueDraft />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;