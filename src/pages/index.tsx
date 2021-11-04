import { NextPage } from 'next';
import { useScroll } from 'hooks';

const Home: NextPage = () => {
  const scrollLockStatus = useScroll();
  const dd = () => {
    scrollLockStatus({ state: true });
    setTimeout(() => {
      scrollLockStatus({ state: false });
    }, 5000);
  };
  const ddd = {
    height: '200vh',
  };
  return (
    <>
      <div style={ddd}>
        next Start kit
        <button onClick={dd}>lock</button>
      </div>
    </>
  );
};

export default Home;
