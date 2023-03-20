import type { BoxProps } from "../../types/BoxProps"

const PrecoDuplo = (props: BoxProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={150}
        height={90}
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "auto",
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
                d="M 126.53446,21.89 H 2.6591983 c -3.759066,0 -6.8358812,2.32 -6.8358812,5.15 v 18.59 l -7.1970721,5.42 c -2.662114,2 -2.662114,5.28 0,7.28 l 7.1970721,5.41 v 18.59 c 0,2.83 3.0768152,5.15 6.8358812,5.15 H 126.53446 c 3.75906,0 6.83588,-2.32 6.83588,-5.15 v -55.3 c 0,-2.83 -3.07682,-5.15 -6.83588,-5.15 z"
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
                x={-4.2365851}
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
                x={81.447311}
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

export default PrecoDuplo
