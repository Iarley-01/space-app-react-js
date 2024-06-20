import { useState, useEffect } from 'react';

import { styled } from 'styled-components';

import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from './componentes/Cabecalho';
import BarraLateral from './componentes/BarraLateral';
import Banner from './componentes/Banner';
import ModalZoom from './componentes/ModalZoom';
import Rodape from './componentes/Rodape';
import bannerBackground from './assets/banner.png';

import fotos from './fotos.json';

import Galeria from './componentes/Galeria';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%; 
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const[termoDeBusca, setTermoDeBusca] = useState('');
  const [fotosFiltradas, setFotosFiltradas] = useState(fotos);
  
  const aoBuscarPorTermo = (event) => {
    console.log(event.target.value);
    setTermoDeBusca(event.target.value);
  }
  
  useEffect(() => {
    const resultado = fotosDaGaleria.filter(foto => foto.titulo.toLowerCase().includes(termoDeBusca.toLowerCase()));
    setFotosFiltradas(resultado);
  }, [termoDeBusca, fotosDaGaleria]);
  /*const fotosFiltradas = fotosDaGaleria.filter(foto => foto.titulo.toLowerCase().includes(termoDeBusca.toLowerCase())
  );*/
  
  console.log(fotosFiltradas);
  
  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    const novasFotos = fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    });
    setFotosDaGaleria(novasFotos);
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho aoBuscarPorTermo={aoBuscarPorTermo}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner 
              texto='A galeria mais completa de fotos do espaço!'
              backgroundImage={bannerBackground}
            />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosFiltradas}
            />
          </ConteudoGaleria>
          
        </MainContainer>
        <Rodape />
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
