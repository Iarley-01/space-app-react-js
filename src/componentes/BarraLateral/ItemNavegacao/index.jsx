import { styled } from 'styled-components';

const ItemEstilizado = styled.li`
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false}) => {
  return (
    <ItemEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="Imagem Ícone"/>
      {children}
    </ItemEstilizado>
  );
}

export default ItemNavegacao;