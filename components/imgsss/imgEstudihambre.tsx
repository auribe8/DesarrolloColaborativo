import React from 'react';
//import '../componentes/css/styles';
import img from 'next/image';

type imgT = {
    name?: String
}

function estudihambre(params:imgT) {
    return (
        <img
        src="../components/img/realidad.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
    />
    )
}
export default estudihambre;