import { styled } from 'styled-components';

import tags from './tags.json';

const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`

const TituloTag = styled.h3`
  color: #D9D9D9; 
  font-size: 24px;
  margin: 0;
`

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`

const BotaoTag = styled.button`
  background: #D9D9D930;
  transition: background-color 0.3s ease;
  color: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  font-size: 24px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`
const Tags = ({texto}) => {
  return (
    <ContainerTags>
      <TituloTag>{texto}</TituloTag>
      <Div>
        {tags.map(tag => <BotaoTag key={tag.id}>{tag.titulo}</BotaoTag>)}
      </Div>
    </ContainerTags>
  );
}

export default Tags;