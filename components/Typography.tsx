import { ReactNode } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font: ${({ theme }): string => theme.typography.header.semiBold};
`;

const Title = styled.h1`
  font: ${({ theme }): string => theme.typography.title.semiBold};
`;

const SubTitle = styled.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: justified;
`;

const Body = styled.p`
  font: ${({ theme }): string => theme.typography.body.regular};
`;

const Hero = styled.p`
  font: ${({ theme }): string => theme.typography.hero.semiBold};
`;

interface Props {
  variant: 'body' | 'header' | 'title' | 'subtitle' | 'hero';
  children: ReactNode;
  className?: string;
  color?: 'red' | 'black';
}

const Typography: React.FC<Props> = ({ variant, children, className, color='black' }) => {
  switch (variant) {
    case 'body':      return <Body className={`typography-${color} ${className} typography`}>{children}</Body>;
    case 'title':     return <Title className={`typography-${color} ${className} typography`}>{children}</Title>;
    case 'header':    return <Header className={`typography-${color} ${className} typography`}>{children}</Header>;
    case 'subtitle':  return <SubTitle className={`typography-${color} ${className} typography`}>{children}</SubTitle>;
    case 'hero':  return <Hero className={`typography-${color} ${className} typography`}>{children}</Hero>;
  }
}

export default styled(Typography)``;
