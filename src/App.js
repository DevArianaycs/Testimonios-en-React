import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estas son: 3 celebridades que marcaron generaciones</h1>
        <Testimonio 
        nombre='Kurt Cobain'
        pais='Estados Unidos'
        imagen='kurt2'
        cargo='Músico y compositor'
        empresa='Nirvana'
        testimonio='La música es mi refugio. A través de cada acorde distorsionado y cada verso lleno de dolor, encuentro un escape de este mundo caótico y confuso. Mis canciones son un grito de angustia, un lamento por las cicatrices invisibles que marcan mi alma. En un mundo de apariencias falsas y superficialidades, encuentro consuelo en la autenticidad de mis letras y en la honestidad cruda de mis melodías. Soy un alma atormentada, un espíritu inquieto en busca de paz. Pero mientras haya una guitarra en mis manos sé que nunca estaré solo en este viaje hacia la redención.'/>

        <Testimonio
        nombre='Marilyn Monroe'
        pais='Estados Unidos'
        imagen='marilyn'
        cargo='Modelo, actriz y cantante '
        empresa='Hollywood'
        testimonio='Mis películas fueron mi refugio, donde pude escapar de la oscuridad y expresar mis anhelos más profundos. A pesar de las sonrisas forzadas y los suspiros silenciados, mantuve mi corazón abierto y mi espíritu libre, recordando al mundo que la belleza verdadera reside en la vulnerabilidad y la autenticidad. Hoy, como ayer, sigo siendo Marilyn Monroe, una mujer en constante búsqueda de su propio destino, dejando mi huella en el tejido del tiempo para siempre.'
        />

        <Testimonio
        nombre='Micahel Jackson'
        pais='Estados Unidos'
        imagen='michael'
        cargo='Compositor, bailarín, productor, cantante y filántropo'
        empresa='Mjj Productions inc'
        testimonio='La música es mi alma, el ritmo es mi corazón, y el escenario es mi hogar. A través de cada nota y cada paso de baile, he buscado conectar con el mundo y tocar los corazones de millones. Mis canciones son mis confesiones, mi baile es mi expresión más pura. En un mundo lleno de caos y dolor, mi música ha sido mi refugio, mi salvación. A pesar de las críticas y los desafíos, he seguido adelante, impulsado por una pasión que arde eternamente en mi interior.'
        />
      
      </div>
    </div>
  );
}

export default App;
