import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const [root, setRoot] = useState<HTMLElement>();


  useEffect(() => {
    if (typeof window.document !== 'undefined') {
      setRoot(document.getElementById('__next') as HTMLElement);
    }
  }, [root]);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default App;
