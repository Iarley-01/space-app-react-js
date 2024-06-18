import { styled } from 'styled-components';

const BannerEstilizado = styled.div`
  background-image: ${props => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat; 
  background-position: center;
  background-size: cover;
  max-width: 1128px;
  height: 328px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const TituloEstilizado = styled.h1`
  color: #FFFFFF;
  max-width: 300px;
  font-weight: 400;
  font-size: 40px;
  padding: 0 64px;
  `

const Banner = ({texto, backgroundImage}) => {
  return (
    <BannerEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </BannerEstilizado>
  );
}

export default Banner;