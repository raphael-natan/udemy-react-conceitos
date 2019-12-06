import React from 'react'
export default (props) => 
<div>
    <h1>{props.valor}</h1>
    <h2>{props.po}</h2>
    <h1>{`Po é menor que 257? ${props.po<257 ? 'Sim' : 'Não'}`}</h1>
</div>