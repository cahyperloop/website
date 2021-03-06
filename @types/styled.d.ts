import 'styled-components';

interface ITypeface {
  regular: string;
  semiBold: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      chcRed: string,
      chcWhite: string,
      chcBlackA: string,
      chcBlackB: string,
      blueA: string,
      greys: Record<1 | 2 | 3 | 4 | 5, string>;
    },
    breakPoints: {
      desktop: string;
    },
    typography: {
      hero: ITypeface;
      header: ITypeface;
      title: ITypeface;
      body: ITypeface;
      nav: ITypeface;
      faq: ITypeface
    };
    constants: Record<string, string>;
  }
}
