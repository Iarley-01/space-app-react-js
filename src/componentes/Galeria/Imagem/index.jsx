import { styled } from 'styled-components';

const ImagemFotoEstilizada = styled.figure`
  width: 448px;
  border-radius: 20px;
  overflow: hidden;
  & img {
    width: 100%;
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
      <FotoLegendaEstilizada>
        <FotoLegendaContainer>
          <h3>{foto.titulo}</h3>
          <FotoRodape>
            <p>{foto.fonte}</p>
            <FotoBotoes>

            <button><img src="/icones/favorito.png" alt="Icone Coração" /></button>
            <button><img src="/icones/expandir.png" alt="Ícone expandir"/></button>
            </FotoBotoes>
          </FotoRodape>
        </FotoLegendaContainer>
        
        
      </FotoLegendaEstilizada>
    </ImagemFotoEstilizada>
  );
}

export default Imagem;