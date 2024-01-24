import '@/styles/globals.scss'

import pkg from '@@/package.json'
import { upperCase } from 'lodash-es'

const fontFamilies = [
  `family=Noto+Sans+JP:wght@200;300;400;500;600;700;800`,
  `family=Roboto:wght@100;300;400;500;700;900`,
  `family=Roboto+Condensed:wght@100;300;400;500;700;900`,
  `display=swap`,
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>{upperCase(pkg.name)}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'anonymous'}
        />
        <link
          href={`https://fonts.googleapis.com/css2?${fontFamilies.join('&')}`}
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
