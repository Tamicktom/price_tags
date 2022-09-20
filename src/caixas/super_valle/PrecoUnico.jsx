const PrecoUnico = (props) => (
    <svg
        viewBox="0 0 1260 552"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
            transform: "scale(0.1)",
        }}
        {...props}
    >
        <g transform="matrix(1.21373 0 0 1.492 152.074 -67.92)">
            <path
                d="M708.661 127.953c0-27.161-27.107-49.213-60.495-49.213h-508.93c-33.389 0-60.496 22.052-60.496 49.213v98.425c0 27.161 27.107 49.213 60.496 49.213h508.93c33.388 0 60.495-22.052 60.495-49.213v-98.425Z"
                style={{
                    fill: props.color,
                }}
            />
            <clipPath id="a">
                <path d="M708.661 127.953c0-27.161-27.107-49.213-60.495-49.213h-508.93c-33.389 0-60.496 22.052-60.496 49.213v98.425c0 27.161 27.107 49.213 60.496 49.213h508.93c33.388 0 60.495-22.052 60.495-49.213v-98.425Z" />
            </clipPath>
            <g clipPath="url(#a)">
                <path
                    d="M708.661 105.493c0-14.765-70.564-26.753-157.48-26.753H236.22c-86.915 0-157.48 11.988-157.48 26.753v143.345c0 14.765 70.565 26.753 157.48 26.753h314.961c86.916 0 157.48-11.988 157.48-26.753V105.493Z"
                    style={{
                        fill: "#fff",
                    }}
                    transform="matrix(.305 0 0 1.46053 35.267 -81.59)"
                />
                <text
                    x={170.734}
                    y={228.185}
                    style={{
                        fontFamily: "'Roboto-Bold','Roboto'",
                        fontWeight: 700,
                        fontSize: "66.667px",
                        fill: props.color,
                    }}
                    transform="matrix(1.64733 0 0 1.34009 -194.79 -101.486)"
                >
                    {"R$"}
                </text>
            </g>
        </g>
        <text
            x={"30%"}
            y={402.596}
            style={{
                fontFamily: "'Roboto-Bold','Roboto'",
                fontWeight: 700,
                fontSize: "66.667px",
                fill: "#000",
                textAlign: "center",
                textAnchor: "middle",
            }}
            transform="matrix(1.25394 0 0 1.25394 146.442 -75.202)"
        >
            {props.descricao_cima}
        </text>
        <text
            x={"30%"}
            y={402.596}
            style={{
                fontFamily: "'Roboto-Bold','Roboto'",
                fontWeight: 700,
                fontSize: "66.667px",
                fill: "#000",
                textAlign: "center",
                textAnchor: "middle",
            }}
            transform="matrix(1.25394 0 0 1.25394 146.442 5.566)"
        >
            {props.descricao_baixo}
        </text>
        <text
            x={170.734}
            y={228.185}
            style={{
                fontFamily: "'Roboto-Bold','Roboto'",
                fontWeight: 700,
                fontSize: "66.667px",
                fill: "#fff",
            }}
            transform="matrix(5.3738 0 0 5.37381 -438.347 -901.588)"
        >
            {props.preco_grande}
        </text>
        <text
            x={170.734}
            y={228.185}
            style={{
                fontFamily: "'Roboto-Bold','Roboto'",
                fontWeight: 700,
                fontSize: "66.667px",
                fill: "#fff",
            }}
            transform="translate(314.645 -365.876) scale(2.40528)"
        >
            {"," + props.preco_pequeno}
        </text>
    </svg>
)

export default PrecoUnico
