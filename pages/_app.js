import '../styles/globals.css';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <div
          className='text-red-500'
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Head>
            <link rel='manifest' href='manifest.json' />
            <meta
              name='apple-mobile-web-app-status-bar-style'
              content='black-translucent'
            />
            <meta
              name='viewport'
              content='initial-scale=1, viewport-fit=cover, user-scalable=no'
            />
          </Head>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </UserProvider>
  );
}
