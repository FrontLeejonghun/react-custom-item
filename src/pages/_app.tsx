import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { GNBLayout } from 'components';

import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const [root, setRoot] = useState<HTMLElement>();

  useEffect(() => {
    if (typeof window.document !== 'undefined') {
      setRoot(document.getElementById('__next') as HTMLElement);
    }
  }, [root]);
  return (
    <GNBLayout>
      <Component {...pageProps} />
    </GNBLayout>
  );
}
export default App;
