/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 우리가 만드는 application 내에서 문제가 일어날 수 있는 부분에 대한 경고를 알려주는 기능이다.
  // react로 치면 <React.StrictMode>와 같다.

  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
