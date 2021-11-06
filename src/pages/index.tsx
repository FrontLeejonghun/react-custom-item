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
      <div className={'main-wrap'}>
        <ul>
          {item.map((mainItem) => {
            return (
              <dl key={mainItem.key}>
                <dt>{mainItem.key}</dt>
                {mainItem.itemList.map((subItem, index) => {
                  return (
                    <>
                      <dd className={'sub-key'} onClick={() => redirectRouter(subItem.redirect)}>
                        {subItem.key}
                      </dd>
                      <dd className={'sub-description'} key={index}>
                        {subItem.description}
                      </dd>
                    </>
                  );
                })}
              </dl>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
