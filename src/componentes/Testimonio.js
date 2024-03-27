import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../img/kurt2.jpg')}
        alt='foto de Kurt'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'> Kurt Cobain</p>
          <p className='cargo-testimonio'>Músico y compositor</p>
          <p className='texto-testimonio'>Soy una persona divertida, me gusta la música y amo el vodka. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  );
}

export default Testimonio;