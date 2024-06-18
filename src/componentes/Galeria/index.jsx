import { styled } from 'styled-components';

import Titulo from '../Titulo';
import Tags from './Tags';
import Populares from './Populares';
import Imagem from './Imagem';

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const Galeria = ({fotos = []}) => {
  return (
    <>
      <Tags texto="busque por tags: " />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          {fotos.map(foto => <Imagem foto={foto}/>)}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
  
}

export default Galeria;