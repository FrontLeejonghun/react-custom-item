import { NextPage } from 'next';
import { useRouter } from 'next/router';
import itemData from 'content/itemData';

const Home: NextPage = () => {
  const router = useRouter();

  const redirectRouter = (path: string) => router.push(path);

  return (
    <>
      {itemData.map((item) => {
        return (
          <>
            <h1 className={'category'}>{item.parentKey}</h1>
            <div className={'card-wrap'} key={item.parentKey}>
              {item.itemList.map((v) => (
                <div className="card-item" key={v.key} onClick={() => redirectRouter(v.redirect)}>
                  <dl>
                    <dt className={'title'}>Title : {v.key} </dt>
                    <dd className={'description'}>description : {v.description}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
