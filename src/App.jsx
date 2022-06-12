import React, { useState } from 'react';
import './App.css';
import SBR from './caixas/sbr/SBR';

function App() {
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState(0);

  function tratarPrecos(precos) {
    let array = precos.split("\n");
    return array;
  }

  function tratarDescricao(des) {
    des = des.split("\n");
    return des;
  }

  function boxers() {
    let tag = [];
    if (preco.length != descricao.length)
      return <p>O tamanho de preço e descrição precisam ser iguais!</p>;

    for (let i = 0; i < preco.length; i++) {
      let tmp = preco[i].split(',');
      const tipo = tmp[0].length;

      let desc = [];
      let list = descricao[i].split(" ");
      const half = Math.ceil(list.length / 2);
      desc.push(list.slice(0, half));
      desc.push(list.slice(half, list.length));

      try {
        if (tmp[1].length < 2) tmp[1] += "0";
        tag.push(
          <SBR
            tipo={tipo}
            preco_grande={tmp[0]}
            preco_pequeno={tmp[1]}
            descricao_cima={(desc[0].toString()).replace(/\,/g, " ")}
            descricao_baixo={(desc[1].toString()).replace(/\,/g, " ")}
          />)
      } catch (e) {

      }
    }
    return tag;
  }

  return (
    <main>
      <h1>Gerador de caixas</h1>
      <div className="top">
        <div>
          <p>Preços</p>
          <textarea
            onChange={
              e => setPreco(tratarPrecos(e.target.value))
            }
          />
        </div>
        <div>
          <p>Descrições</p>
          <textarea
            onChange={
              e => setDescricao(tratarDescricao(e.target.value))
            } />
        </div>
      </div>
      <div className="bottom">
        {
          boxers()
        }
      </div>
    </main>
  );
}

export default App;