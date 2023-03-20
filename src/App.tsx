//* Libraries imports
import { useState, useId, type ChangeEvent } from 'react';

//* Components imports
import SBR from './caixas/sbr/SBR.jsx';

//* Types imports
import type { BoxProps } from './types/BoxProps';

const optionsMercado = [
  "SBR",
];

export default function App() {
  const [preco, setPreco] = useState<string[]>([]);
  const [descricao, setDescricao] = useState<string[]>([]);
  const [mercado, setMercado] = useState("SBR");
  const [cor, setCor] = useState("#f20530");
  const id = useId();

  const handleColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCor(e.target.value);
  }

  const priceTag = (tipo: number, props: BoxProps) => {
    if (mercado == "SBR") {
      return (
        <SBR
          key={id + mercado + tipo + Math.random()}
          {...props}
        />)
    }
  }

  function tratarPrecos(precos: string) {
    const res = precos.split("\n");
    return res;
  }

  function tratarDescricao(description: string) {
    const res = description.split("\n");
    return res;
  }

  const selectOptions = (optionsList: string[]) => {
    let options = [];
    const id = useId();
    for (let i = 0; i < optionsList.length; i++) {
      options.push(
        <option
          key={id + i}
          value={optionsList[i]}
        >
          {optionsList[i]}
        </option>);
    }
    return options;
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
        const props = {
          preco_grande: tmp[0],
          preco_pequeno: tmp[1],
          descricao_cima: desc[0].toString().replace(/\,/g, " ").toUpperCase(),
          descricao_baixo: desc[1].toString().replace(/\,/g, " ").toUpperCase(),
          tipo: tipo,
          color: cor,
        }
        tag.push(
          priceTag(tipo, props)
        )
      } catch (e) {

      }
    }
    return tag;
  }

  return (
    <main className="flex flex-col items-center font-sans p-5 w-full">
      <div className="top flex flex-col justify-center w-full mb-5 gap-4">
        <div className="flex flex-col justify-center w-full items-center gap-4">
          <h1 className='text-3xl font-bold'>Gerador de caixas</h1>
          <select
            name="Mercado"
            id="mercado"
            onBlur={(e) => {
              setMercado(e.target.value)
            }}
            className="mb-2 text-sm p-2 border-2 border-gray-300 rounded-md"
          >
            {selectOptions(optionsMercado)}
          </select>
          <div className="mb-2 flex flex-row justify-start items-center gap-4">
            <label htmlFor="">Cor para a tag</label>
            <input onChange={(e) => handleColor(e)} type="color" />
          </div>
          {/* <div className='mb-2 flex flex-row justify-start items-center gap-4'>
            <label htmlFor="">Cor para o texto</label>
            <input onChange={(e) => handleColor(e)} type="color" />
          </div> */}
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <div className='flex flex-col justify-start items-start'>
            <p className='font-bold'>Descrições</p>
            <textarea
              placeholder={`Produto 1\nProduto 2`}
              onChange={e => setDescricao(tratarDescricao(e.target.value))}
              className="w-48 h-20 text-sm p-1 border-2 border-gray-300 rounded-md"
            />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='font-bold'>Preços</p>
            <textarea
              placeholder={`xx,xx\nxx,xx`}
              onChange={e => setPreco(tratarPrecos(e.target.value))}
              className="w-48 h-20 text-sm p-1 border-2 border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {
          boxers()
        }
      </div>
    </main>

  );
}