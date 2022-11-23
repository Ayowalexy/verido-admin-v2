import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { useRef } from "react";
import { UserRoleProvider } from "../public/context/user.context";
import PubNub from "pubnub";
import AppContextProvider from '../public/context/app.context'
import { PubNubProvider, usePubNub } from "pubnub-react";

const pubnub = new PubNub({
  publishKey: "pub-c-3272fe08-52e8-4278-826d-98a0cc703878",
  subscribeKey: "sub-c-afe58600-7616-11ec-add2-a260b15b99c5",
  uuid: "myUniqueUUID",
});

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  return (
   <AppContextProvider>
     <PubNubProvider client={pubnub}>
      <UserRoleProvider>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ChakraProvider>
      </UserRoleProvider>
    </PubNubProvider>
   </AppContextProvider>
  );
}

export default MyApp;
