import React, { useState } from 'react';

export default function Admin() {
  const [titulo, setTitulo] = useState('');
  const [medida, setMedida] = useState('');
  const [preco, setPreco] = useState('');
  const [foto, setFoto] = useState('');

  function salvar() {
    const pneus = JSON.parse(localStorage.getItem("pneus") || "[]");
    pneus.push({ titulo, medida, preco, foto });
    localStorage.setItem("pneus", JSON.stringify(pneus));

    alert("Pneu cadastrado!");
    setTitulo('');
    setMedida('');
    setPreco('');
    setFoto('');
  }

  return (
    <div className="container">
      <h1>Cadastro de Pneus</h1>

      <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <input placeholder="Medida" value={medida} onChange={e => setMedida(e.target.value)} />
      <input placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
      <input placeholder="URL da Foto" value={foto} onChange={e => setFoto(e.target.value)} />

      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
