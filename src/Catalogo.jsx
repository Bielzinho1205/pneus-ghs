import React from 'react';

export default function Catalogo() {
  const pneus = JSON.parse(localStorage.getItem("pneus") || "[]");

  return (
    <div className="container">
      <h1>Catálogo de Pneus</h1>
      {pneus.length === 0 && <p>Nenhum pneu cadastrado.</p>}

      <div className="grid">
        {pneus.map((p, i) => (
          <div key={i} className="card">
            <img src={p.foto} alt="pneu" />
            <h3>{p.titulo}</h3>
            <p>{p.medida}</p>
            <strong>R$ {p.preco}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
