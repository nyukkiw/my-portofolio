import localFont from 'next/font/local';

export const robotoCondensed = localFont({
src: [
    {
      path: '../public/fonts/Roboto_Condensed-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto_Condensed-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto_Condensed-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-roboto-condensed',
});
