import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { useRef } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient())
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
