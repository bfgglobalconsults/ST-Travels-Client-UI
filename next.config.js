/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 
 async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.paypal.com https://*.paypalobjects.com https://www.google.com https://www.gstatic.com  blob:;
            style-src 'self' 'unsafe-inline';
            frame-src 'self' https://*.paypal.com https://*.google.com;
            img-src 'self' data: https://*.paypal.com https://*.paypalobjects.com;
            connect-src 'self' https://formspree.io https://formspree.io/f/mdkndwgr;
          `.replace(/\s{2,}/g, " ").trim(),
        },
      ],

    },
  ];
},


  async rewrites() {
    return [
      {
        source: "/api/todos",
        destination: "https://st-travels-client-api.onrender.com",
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
