import React from "react"

const PrecoTriplo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={150}
        height={90}
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
        }}
        viewBox="0 10 120 120"
        {...props}
    >
        <defs>
            <style>
                {
                    ".fil2{fill:#fefefe}.fil1{fill:rgb(0, 0, 0)}.fnt0{font-weight:700;font-size:15.73px;font-family:'Calibri'}"
                }
            </style>
        </defs>
        <g id="Camada_x0020_1">
            <path x="50%"
                d="M 144.51947,21.89 H -19.557791 c -4.979018,0 -9.054371,2.32 -9.054371,5.15 v 18.59 l -4.40902,5.42 c -1.921166,3.243405 -1.798607,4.243504 0,7.28 l 4.40902,5.41 v 18.59 c 0,2.83 4.075353,5.15 9.054371,5.15 H 144.51947 c 4.979,0 9.05437,-2.32 9.05437,-5.15 v -55.3 c 0,-2.83 -4.07537,-5.15 -9.05437,-5.15 z"
                style={{
                    fill: `${props.color}`,
                }}
            />
            <text x={"30%"} y={105.33} className="fil1 fnt0" style={{
                textAlign: "center",
                textAnchor: "middle"
            }}>
                {props.descricao_cima.toUpperCase()}
            </text>
            <text x={"30%"} y={122.58} className="fil1 fnt0" style={{
                textAlign: "center",
                textAnchor: "middle"
            }}>
                {props.descricao_baixo.toUpperCase()}
            </text>
            <text
                x={-29}
                y={81.86}
                className="fil2"
                style={{
                    fontWeight: 700,
                    fontSize: "85.97px",
                    fontFamily: "'Calibri'",
                }}
            >
                {props.preco_grande}
            </text>
            <text
                x={102}
                y={52}
                className="fil2"
                style={{
                    fontWeight: 700,
                    fontSize: "39.33px",
                    fontFamily: "'Calibri'",
                }}
            >
                {"," + props.preco_pequeno}
            </text>
        </g>
    </svg>
)

export default PrecoTriplo
