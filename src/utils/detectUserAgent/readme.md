# detectUserAgent util


## How To Use  
set Function
```typescript jsx
const { deviceType, browserType, originUserAgent } = detectUserAgent(userAgent);
```
useAgent in SSR   
```typescript jsx
const userAgent = ctx.req.headers['user-agent'] as string;
```
useAgent in SSR   
```typescript jsx
const userAgent = navigator.userAgent;
```


## Example
in Page SSR Logic
```typescript jsx
import { GetServerSidePropsContext } from 'next';
import { CheckUserAgent } from 'containers';
import { detectUserAgent } from 'utils';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const userAgent = ctx.req.headers['user-agent'] as string;

  const { deviceType, browserType, originUserAgent } = detectUserAgent(userAgent);

  return {
    props: {
      deviceType: deviceType(),
      browserType: browserType(),
      originUserAgent: originUserAgent(),
    },
  };
}

export default CheckUserAgent;

```
in Page View 
```typescript jsx
export const CheckUserAgent = ({ deviceType, browserType, originUserAgent }: Props) => {
  return (
    <div>
      <h1>Check User Agent (SSR)</h1>
      <p>User Agent:{originUserAgent}</p>
      <p>device Type:{deviceType}</p>
      <p>browser Type:{browserType}</p>
    </div>
  );
};
```


## Type
fucntion should be return string type in case 
```typescript
type Props = {
  deviceType: string;
  browserType: string;
  originUserAgent: string;
};
```



  

