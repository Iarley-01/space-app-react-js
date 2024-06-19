import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
  background-color: #001634;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
  margin-top: 30px;
  div p a {
    text-decoration: none;
    color: #FFFFFF;
  }
`

const IconesContainer = styled.div`
  display: flex;
  gap: 24px;
`

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <IconesContainer>
        <img src="/imagens/sociais/facebook.svg" alt="Ícone Facebook" />
        <img src="/imagens/sociais/twitter.svg" alt="Ícone Twitter" />
        <img src="/imagens/sociais/instagram.svg" alt="Ícone Instagram" />
      </IconesContainer>
      <div>
        <p>Desenvolvido por <a href="#">Iarley Alves</a></p>
      </div>
    </RodapeEstilizado>
  );
}

export default Rodape;