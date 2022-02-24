export const detectUserAgent = (userAgent: string) => {
  const deviceType = () => {
    const type = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      userAgent,
    );
    return type ? 'mobile' : 'desktop';
  };

  const browserType = () => {
    const browser = userAgent.match(
      /Chrome|Chromium|IE|IEMobile|WPDesktop|Opera|MSIE|Navigator|Safari|Firefox/gi,
    );
    return browser ? browser[0] : 'noting found';
  };

  const originUserAgent = () => userAgent;

  return { deviceType, browserType, originUserAgent };
};
