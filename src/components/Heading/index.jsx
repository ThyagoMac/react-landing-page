import * as Styled from './styles';

export const Heading = ({
  children,
  colordark = false,
  as = 'h1',
  size = 'big',
}) => {
  return (
    <Styled.HeadingStyle colordark={colordark} as={as} size={size}>
      {children}
    </Styled.HeadingStyle>
  );
};
