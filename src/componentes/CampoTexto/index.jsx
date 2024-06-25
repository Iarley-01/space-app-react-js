import { styled } from 'styled-components';
import search from './search.png';

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  @media(max-width: 740px){
    display: flex;
    width: 100%;
  }
`

const InputEstilizado = styled.input`
  background: transparent;
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px; 
  border: 2px solid; 
  border-color: #C98CF1;
  box-sizing: border-box;
  width: 566px;
  color: #D9D9D9; 
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

const CampoTexto = ({aoBuscarPorTermo, ...props}) => {
  return (
    <ContainerEstilizado>
      <InputEstilizado placeholder="O que voce procura?" {...props} onChange={aoBuscarPorTermo}/>
      <IconeLupa src={search} alt="Ícone de Lupa" />
    </ContainerEstilizado>
  );
}

export default CampoTexto;