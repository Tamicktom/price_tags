import React from "react";
import PrecoUnico from "./PrecoUnico.jsx";
import PrecoDuplo from "./PrecoDuplo.jsx";
// import PrecoTriplo from "./PrecoTriplo.jsx";

function SuperValle(props) {
    if (props.tipo == 0 || props.tipo == 1) {
        return (
            <PrecoUnico
                preco_grande={props.preco_grande}
                preco_pequeno={props.preco_pequeno}
                descricao_cima={props.descricao_cima}
                descricao_baixo={props.descricao_baixo}
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
            />
        )
    }
    // return (
    //     <PrecoTriplo
    //         preco_grande={props.preco_grande}
    //         preco_pequeno={props.preco_pequeno}
    //         descricao_cima={props.descricao_cima}
    //         descricao_baixo={props.descricao_baixo}
    //     />
    // )
}

export default SuperValle
