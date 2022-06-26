/* eslint-disable react/no-danger */
import Head from "next/head";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import tw, { GlobalStyles } from "twin.macro";

// ========= DATA =========
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <GlobalStyles />
      <div tw="flex flex-col w-screen antialiased">
        <div css={[`flex: 1 0 auto;`]}>
          <Component {...pageProps} />
        </div>
        <div css={[`flex-shrink: 0;`, tw`w-full`]}>
          <div>this is a fake footer</div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
