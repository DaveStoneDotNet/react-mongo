// Based on the template in Web Starter Kit : https://github.com/google/web-starter-kit/blob/master/app/index.html

const metaAssets = () => {
  return [
    { charset: 'utf-8' },
    { name: 'description', content: 'react-mongo' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'react-mongo' },
  ];
};

export const title = 'react-mongo';
export const meta = metaAssets();

