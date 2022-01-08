import { NextPage } from 'next';
import { useRouter } from 'next/router';
import itemData from 'content/itemData';

const Home: NextPage = () => {
  const router = useRouter();

  const redirectRouter = (path: string) => {
    return router.push(path);
  };

  const item = itemData;

  return (
    <>
      {item.map((item) => {
        return (
          <>
            <h1 className={'category'} key={item.key}>
              {item.key}
            </h1>
            <div className={'card-wrap'}>
              {item.itemList.map((v) => {
                return (
                  <div className="card-item" key={v.key} onClick={() => redirectRouter(v.redirect)}>
                    <dl>
                      <dt className={'title'}>Title : {v.key} </dt>
                      <dd className={'description'}>description : {v.description}</dd>
                    </dl>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
