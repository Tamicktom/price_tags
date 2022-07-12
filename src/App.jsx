import React, { useState, useId } from 'react';
import { useEffect } from 'react';
import './App.css';
import SBR from './caixas/sbr/SBR.jsx';

const optionsMercado = [
  "sbr",
  "pessoto",
  "ponto_certo", "ja",
  "falavina",
  "supervalle_1",
  "supervalle_2"
];

function App() {
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState(0);
  const [mercado, setMercado] = useState(0);
  const id = useId();

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
            key={id + i}
            tipo={tipo}
            preco_grande={tmp[0]}
            preco_pequeno={tmp[1]}
            descricao_cima={(desc[0].toString()).toUpperCase()}
            descricao_baixo={(desc[1].toString()).toUpperCase()}
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
          <select
            onChange={(e) => { setMercado(e.target.value) }}
            name="Mercado"
            id="mercado">
            {selectOptions(optionsMercado)}
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

const selectOptions = (optionsList) => {
  let options = [];
  const id = useId();
  for (let i = 0; i < optionsList.length; i++) {
    options.push(
      <option
        key={id + i}
        value={optionsList[i]}>
        {optionsList[i]}
      </option>);
  }
  return options;
}


export default App;