/* eslint-disable import/no-unresolved */
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import createCache from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material/';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { setTheme } from 'theme';

// global styles
import '../styles/globals.css';

// swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface MyAppPropsModel extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

clientSideEmotionCache.compat = true;

function MyApp(props: MyAppPropsModel) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  const { theme } = setTheme({});

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Setup Fron Nextjs</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
