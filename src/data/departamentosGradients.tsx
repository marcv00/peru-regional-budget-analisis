import { JSX } from "react";

interface Gradients {
    [key: string]: JSX.Element;
}

const gradients: Gradients = {
    loreto: (
        <linearGradient id="loreto-gradient" gradientTransform="rotate(-30)">
            <stop offset="0%" stopColor="#137E33" />
            <stop offset="45%" stopColor="#145628" />
        </linearGradient>
    ),
    amazonas: (
        <linearGradient id="amazonas-gradient">
            <stop offset="0%" stopColor="#1F8B40" />
            <stop offset="100%" stopColor="#137E33" />
        </linearGradient>
    ),
    "san-martin": (
        <linearGradient
            id="san-martin-gradient"
            gradientTransform="rotate(53.648)"
        >
            <stop offset="0%" stopColor="#128534" />
            <stop offset="100%" stopColor="#247C3F" />
        </linearGradient>
    ),
    cajamarca: (
        <linearGradient
            id="cajamarca-gradient"
            x1="0%"
            y1="95%"
            x2="90%"
            y2="5%"
        >
            <stop offset="30%" stopColor="#AC9557" />
            <stop offset="68%" stopColor="#1F8B40" />
        </linearGradient>
    ),
    "la-libertad": (
        <linearGradient
            id="la-libertad-gradient"
            x1="18%"
            y1="65%"
            x2="90%"
            y2="35%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="16%" stopColor="#C0B96B" />
            <stop offset="33%" stopColor="#AC9557" />
            <stop offset="60%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#1F8B40" />
        </linearGradient>
    ),
    lambayeque: (
        <linearGradient
            id="lambayeque-gradient"
            x1="45%"
            y1="75%"
            x2="75%"
            y2="50%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="25%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    piura: (
        <linearGradient id="piura-gradient" x1="20%" y1="75%" x2="78%" y2="60%">
            <stop offset="3%" stopColor="#D8D592" />
            <stop offset="22%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    tumbes: (
        <linearGradient
            id="tumbes-gradient"
            x1="55%"
            y1="33%"
            x2="85%"
            y2="55%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="22%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    ancash: (
        <linearGradient
            id="ancash-gradient"
            x1="22%"
            y1="65%"
            x2="60%"
            y2="40%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="22%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    huanuco: (
        <linearGradient
            id="huanuco-gradient"
            x1="25%"
            y1="70%"
            x2="70%"
            y2="30%"
        >
            <stop offset="13%" stopColor="#AC9557" />
            <stop offset="93%" stopColor="#247C3F" />
        </linearGradient>
    ),
    lima: (
        <linearGradient id="lima-gradient" x1="44%" y1="65%" x2="65%" y2="50%">
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="23%" stopColor="#C0B96B" />
            <stop offset="98%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    puno: (
        <linearGradient id="puno-gradient" x1="50%" y1="40%" x2="57%" y2="8%">
            <stop offset="11%" stopColor="#AC9557" />
            <stop offset="93%" stopColor="#247C3F" />
        </linearGradient>
    ),
    arequipa: (
        <linearGradient
            id="arequipa-gradient"
            x1="42%"
            y1="61%"
            x2="70%"
            y2="30%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="21%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    tacna: (
        <linearGradient
            id="tacna-gradient"
            x1="50%"
            y1="95%"
            x2="100%"
            y2="10%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="22%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    "madre-de-dios": (
        <linearGradient
            id="madre-de-dios-gradient"
            x1="50%"
            y1="70%"
            x2="85%"
            y2="20%"
        >
            <stop offset="0%" stopColor="#247C3F" />
            <stop offset="100%" stopColor="#20512E" />
        </linearGradient>
    ),
    moquegua: (
        <linearGradient
            id="moquegua-gradient"
            x1="30%"
            y1="90%"
            x2="85%"
            y2="30%"
        >
            <stop offset="0%" stopColor="#D8D592" />
            <stop offset="22%" stopColor="#C0B96B" />
            <stop offset="66%" stopColor="#AC9557" />
            <stop offset="100%" stopColor="#AC9557" />
        </linearGradient>
    ),
    cusco: (
        <linearGradient id="cusco-gradient" x1="48%" y1="65%" x2="52%" y2="40%">
            <stop offset="11%" stopColor="#AC9557" />
            <stop offset="93%" stopColor="#247C3F" />
        </linearGradient>
    ),
    apurimac: (
        <linearGradient
            id="apurimac-gradient"
            x1="22%"
            y1="30%"
            x2="50%"
            y2="-50%"
        >
            <stop offset="11%" stopColor="#AC9557" />
            <stop offset="93%" stopColor="#247C3F " />
        </linearGradient>
    ),
    ayacucho: (
        <linearGradient
            id="ayacucho-gradient"
            x1="40%"
            y1="40%"
            x2="65%"
            y2="10%"
        >
            <stop offset="11%" stopColor="#AC9557 " />
            <stop offset="100%" stopColor="#247C3F " />
        </linearGradient>
    ),
    huancavelica: (
        <linearGradient
            id="huancavelica-gradient"
            x1="45%"
            y1="25%"
            x2="118%"
            y2="1%"
        >
            <stop offset="11%" stopColor="#AC9557 " />
            <stop offset="93%" stopColor="#247C3F " />
        </linearGradient>
    ),
    junin: (
        <linearGradient id="junin-gradient" x1="35%" y1="60%" x2="80%" y2="40%">
            <stop offset="11%" stopColor="#AC9557 " />
            <stop offset="93%" stopColor="#247C3F " />
        </linearGradient>
    ),
    pasco: (
        <linearGradient id="pasco-gradient" x1="25%" y1="70%" x2="95%" y2="45%">
            <stop offset="11%" stopColor="#AC9557 " />
            <stop offset="93%" stopColor="#247C3F " />
        </linearGradient>
    ),
    ica: (
        <linearGradient id="ica-gradient" x1="30%" y1="60%" x2="115%" y2="5%">
            <stop offset="0%" stopColor="#D8D592 " />
            <stop offset="19%" stopColor="#C0B96B " />
            <stop offset="39%" stopColor="#AC9557  " />
            <stop offset="63%" stopColor="#AC9557 " />
        </linearGradient>
    ),
    ucayali: (
        <linearGradient
            id="ucayali-gradient"
            x1="40%"
            y1="65%"
            x2="85%"
            y2="20%"
        >
            <stop offset="0%" stopColor="#137E33  " />
            <stop offset="100%" stopColor="#20512E " />
        </linearGradient>
    ),
};

export default gradients;
