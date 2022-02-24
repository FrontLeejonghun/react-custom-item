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
