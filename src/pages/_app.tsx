import { AppProps } from 'next/app';
import { GNBLayout } from 'components';

import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <GNBLayout>
      <Component {...pageProps} />
    </GNBLayout>
  );
}
export default App;
