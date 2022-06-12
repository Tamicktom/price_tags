import React, { useState } from 'react';
import './App.css';
import SBR from './caixas/sbr/SBR.jsx';

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
      <div className="top">
        <div className="left">
          <h1>Gerador de caixas</h1>
          <select name="Mercado" id="mercado">
            <option value="sbr">SBR</option>
            <option value="pessoto">Pessoto</option>
            <option value="ponto_certo">Ponto Certo</option>
            <option value="ja">JA</option>
            <option value="falavina">Falavina</option>
            <option value="supervalle_1">SuperValle 1</option>
            <option value="supervalle_2">SuperValle 2</option>
          </select>
        </div>
        <div className="right">
          <div>
            <p>Descrições</p>
            <textarea
              placeholder={`Produto 1\nProduto 2`}
              onChange={
                e => setDescricao(tratarDescricao(e.target.value))
              } />
          </div>
          <div>
            <p>Preços</p>
            <textarea
              placeholder={`xx,xx\nxx,xx`}
              onChange={
                e => setPreco(tratarPrecos(e.target.value))
              }
            />
          </div>
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