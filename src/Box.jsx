import React from "react"

const Box = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={90}
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
      <path
        d="M104.58 21.89h-92.6c-2.81 0-5.11 2.32-5.11 5.15v18.59l-5.38 5.42c-1.99 2-1.99 5.28 0 7.28l5.38 5.41v18.59c0 2.83 2.3 5.15 5.11 5.15h92.6c2.81 0 5.11-2.32 5.11-5.15v-55.3c0-2.83-2.3-5.15-5.11-5.15z"
        style={{
          fill: '#f20530',
        }}
      />
      <text x={"50%"} y={105.33} className="fil1 fnt0" style={{
        textAlign: "center",
        textAnchor: "middle"
      }}>
        {props.descricao_cima.toUpperCase()}
      </text>
      <text x={"50%"} y={122.58} className="fil1 fnt0" style={{
        textAlign: "center",
        textAnchor: "middle"
      }}>
        {props.descricao_baixo.toUpperCase()}
      </text>
      <text
        x={9.3}
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
        x={54.74}
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

export default Box
