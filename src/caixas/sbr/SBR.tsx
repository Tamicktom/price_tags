import PrecoUnico from "./PrecoUnico";
import PrecoDuplo from "./PrecoDuplo";
import PrecoTriplo from "./PrecoTriplo";

import type { BoxProps } from "../../types/BoxProps";

function SBR(props: BoxProps) {
  if (props.tipo == 0 || props.tipo == 1) {
    return (
      <PrecoUnico
        preco_grande={props.preco_grande}
        preco_pequeno={props.preco_pequeno}
        descricao_cima={props.descricao_cima}
        descricao_baixo={props.descricao_baixo}
        color={props.color}
        tipo={props.tipo}
      />
    )
  }
  if (props.tipo == 2) {
    return (
      <PrecoDuplo
        preco_grande={props.preco_grande}
        preco_pequeno={props.preco_pequeno}
        descricao_cima={props.descricao_cima}
        descricao_baixo={props.descricao_baixo}
        color={props.color}
        tipo={props.tipo}
      />
    )
  }
  return (
    <PrecoTriplo
      preco_grande={props.preco_grande}
      preco_pequeno={props.preco_pequeno}
      descricao_cima={props.descricao_cima}
      descricao_baixo={props.descricao_baixo}
      color={props.color}
      tipo={props.tipo}
    />
  )
}

export default SBR
