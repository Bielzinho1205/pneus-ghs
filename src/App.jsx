import React, { useState } from 'react';
import Catalogo from './Catalogo';
import Admin from './Admin';

export default function App() {
  const [page, setPage] = useState('catalogo');

  return (
    <div>
      <nav className="topbar">
        <button onClick={() => setPage('catalogo')}>Catálogo</button>
        <button onClick={() => setPage('admin')}>Admin</button>
      </nav>

      {page === 'catalogo' && <Catalogo />}
      {page === 'admin' && <Admin />}
    </div>
  );
}
