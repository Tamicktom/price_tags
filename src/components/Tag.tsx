import SBR from "../caixas/sbr/SBR";

import type { BoxProps } from "../types/BoxProps";
import type { SupermarketOptions } from "../types/Supermarkets";

type TagsProps = {
  price: string[],
  description: string[],
  color: string,
  supermarket: SupermarketOptions,
}

export default function Tags(props: TagsProps) {
  return (
    <div className="flex flex-row flex-wrap w-full h-full p-4">
      {boxers(props.price, props.description, props.color, props.supermarket) || <p>Insira os dados</p>}
    </div>
  )
}

function boxers(price: string[], description: string[], color: string, supermarket: SupermarketOptions = "SBR") {
  let tag = [];
  if (price.length != description.length)
    return <p>O tamanho de preço e descrição precisam ser iguais!</p>;

  for (let i = 0; i < price.length; i++) {
    let tmp = price[i].split(',');
    const tipo = tmp[0].length;

    let desc = [];
    let list = description[i].split(" ");
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
        color: color,
      }
      tag.push(
        priceTag(props, supermarket)
      )
    } catch (e) {

    }
  }
  return tag;
}

const priceTag = (props: BoxProps, supermarket: SupermarketOptions) => {
  if (supermarket == "SBR") {
    return (
      <SBR
        key={crypto.randomUUID()}
        {...props}
      />)
  }
}