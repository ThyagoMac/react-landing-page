import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';

export const GridContent = ({ children, title, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading colordark={background}>{title}</Heading>
        <Styled.Html>{children}</Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
