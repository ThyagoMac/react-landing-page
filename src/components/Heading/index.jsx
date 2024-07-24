import * as Styled from './styles';

export const Headning = ({
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
