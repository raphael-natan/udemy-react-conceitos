import React from 'react'
import ReactDom from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB as B } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
const element = document.getElementById('root')
ReactDom.render(
    <div>
        <Pai/>
        <ComponenteComFuncao/>
        <Familia sobrenome="Nunes">
            <Membro nome="Raphael" />
            <Membro nome="Jéssica" />
        </Familia>
        <FamiliaSilva />
        {/*<FamiliaSilva sobrenome="Silva" />*/}
        <MultiElementos />
        <PrimeiroComponente valor="Bom dia!" po={Math.pow(2, 8)} />
        <CompA valor="Esse é o 1°" />
        <B valor="Esse é o 2° !!!" />
    </div>
    , element)