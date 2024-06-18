import { styled } from 'styled-components';

const ImagemFotoEstilizada = styled.figure`
  width: ${props => props.$expandida ? '90%' : '460px'};
  max-width: 100%;
  & > img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
  
  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px; 
    color: #FFFFFF;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    
    h4 {
      flex-grow: 1;
    }
    
    h3, h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`

const FotoLegendaEstilizada = styled.figcaption`
  display: flex;
  flex-direction: column;
`

const FotoLegendaContainer = styled.div`
  background-color: #001634;
  color: #FFFFFF;
`

const FotoRodape = styled.div`
  display: flex;
  justify-content: space-between;
`

const FotoBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    background-color: transparent;
    border: none;
  }
`

const Imagem = ({foto}) => {
  return (
    <ImagemFotoEstilizada>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <FotoLegendaContainer>
          <h3>{foto.titulo}</h3>
          <FotoRodape>
            <h4>{foto.fonte}</h4>
            <FotoBotoes>

            <button><img src="/icones/favorito.png" alt="Icone Coração" /></button>
            <button><img src="/icones/expandir.png" alt="Ícone expandir"/></button>
            </FotoBotoes>
          </FotoRodape>
        </FotoLegendaContainer>
        
        
      </figcaption>
    </ImagemFotoEstilizada>
  );
}

export default Imagem;