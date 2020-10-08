import { CSSReset, ThemeProvider, theme } from '@chakra-ui/core';
import App, { AppContext, AppInitialProps } from 'next/app';

export default class GuideApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        appProp: ctx.pathname
      }
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}