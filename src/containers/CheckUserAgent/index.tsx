type Props = {
  deviceType: string;
  browserType: string;
  originUserAgent: string;
};

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
