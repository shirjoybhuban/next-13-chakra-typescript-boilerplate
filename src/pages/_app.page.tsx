import { Flex } from "@chakra-ui/react";
import type { AppProps } from 'next/app'
import Head from "next/head";

import GlobalContext from "~/shared/contexts/globalContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Head>
        <title>NextJS 13-Chakra UI-Boilerplate</title>
      </Head>
      <Flex flexDir="column" minH="100vh" w="100%" p={6}>
        <Component {...pageProps} />
      </Flex>
    </GlobalContext>
  );
};

export default MyApp;
