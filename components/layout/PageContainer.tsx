import styled from 'styled-components';
import Section from './Section';
import Typography from '../Typography';


const PageContainerV1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 865px; */
  flex-grow: 0;
  flex-shrink: 1;

  margin-top: ${({ theme }): string => theme.constants.navbarHeight}; /* nav bar height */

  .section:nth-child(2n) {
    background-color: ${({ theme }):string => theme.palette.chcWhite};
    .typography-black{
      color: ${({ theme }):string => theme.palette.chcBlackA};
    }
  }
  .section:nth-child(2n+1) {
    background-color: ${({ theme }):string => theme.palette.chcBlackA};
    .typography-black {
      color: ${({ theme }):string => theme.palette.chcWhite};
    }
    a {
      color: ${({ theme }): string => theme.palette.blueA};
    }
  }
`;


const PageContainerV2 = styled(PageContainerV1)`
  .section:nth-child(2n+1) {
    background-color: ${({ theme }):string => theme.palette.chcWhite};
    .typography-black{
      color: ${({ theme }):string => theme.palette.chcBlackA};
    }
  }
  .section:nth-child(2n) {
    background-color: ${({ theme }):string => theme.palette.chcBlackA};
    .typography-black {
      color: ${({ theme }):string => theme.palette.chcWhite};
    }
    a {
      color: ${({ theme }): string => theme.palette.blueA};
    }
  }
`;


export default ({version=1, children}: {version?: number, children: React.ReactNode}) => version === 1 ? <PageContainerV1>{children}</PageContainerV1> : <PageContainerV2>{children}</PageContainerV2> ;
