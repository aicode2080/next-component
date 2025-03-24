import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import withAntdLess from 'next-plugin-antd-less';

const CORS_HEADERS = [
  {
    key: 'Access-Control-Allow-Credentials',
    value: 'true',
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
  {
    key: 'Access-Control-Allow-Methods',
    value: 'GET,DELETE,PATCH,POST,PUT',
  },
  {
    key: 'Access-Control-Allow-Headers',
    value: 'Content-Type, Authorization',
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    JWT_SECRET: 'next-component',
    BASE_API_URL: '/api',
  },
  async headers() {
    // 跨域配置
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/api/:path*', // 为访问 /api/** 的请求添加 CORS HTTP Headers
        headers: CORS_HEADERS,
      },
      {
        source: '/specific', // 为特定路径的请求添加 CORS HTTP Headers,
        headers: CORS_HEADERS,
      },
    ];
  },
  swcMinify: true,
};
const withNextIntl = createNextIntlPlugin()(nextConfig);

export default withAntdLess(withNextIntl);
