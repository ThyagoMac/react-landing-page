import * as Styled from './styles';
import { Heading } from '../Heading/index';

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size="medium" colordark="">
      <Styled.Container href={link}>
        {!!srcImage ? <img src={srcImage} alt={'text'} /> : text}
      </Styled.Container>
    </Heading>
  );
};
