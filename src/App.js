import React from 'react';
import './App.css';
import logo from './images/deadlock2.png';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import NewDraft from './new-draft';

function App() {
  return (
    <Router>
      <div className="App">
        <Content />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const isNewDraft = location.pathname === '/new-draft';

  return (
    <>
      {!isNewDraft && (
        <header className="App-header">
          <img src={logo} alt="Logo" />
          <div>
            <Link to="/new-draft">
              <button>Novo Draft</button>
            </Link>
          </div>
          <div>
            <button>Entrar em Draft</button>
          </div>
          <div>
            <button>Analisar Estatísticas</button>
          </div>
        </header>
      )}
      <main>
        <Routes>
          <Route path="/new-draft" element={<NewDraft />} />
        </Routes>
      </main>
    </>
  );
}

export default App;