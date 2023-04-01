import React from 'react';
import { useSelector } from 'react-redux';

export default function Home () {
    const categoria = useSelector(state => state.categoria);
    console.log(categoria)
    
    return (
        <h1>Categoria: {categoria[0].nome}</h1>
    )
}