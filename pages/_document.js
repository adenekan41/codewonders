/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="author" content="Adenekan Wonderful" />
          <meta
            name="keywords"
            content="Adenekan Wonderful, codewonders, codewonders.dev, codewonders.us, affinity developer."
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."
          />
          <meta
            property="og:description"
            content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="twitter:site" content="@code_wonders" />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/jz5Qwx1/Group-7.png"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link rel="preconnect" href="https://i.ibb.co/" crossOrigin />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />
          <link
            rel="author"
            href="https://lh3.googleusercontent.com/KUg3rbUWiVpV83Sdsy5FcsGeOlpcOgi1o3wLhcZGmGkjDmWCj4Hh4kLEEn_1b4dGsm9hzW7lGGvEsUpH2wpCRk9vlfod3ojbJyG7Rdb3ViBaBric9MwvP6J422dIifjzdT4gMJdKkWB4TIlfouuwVm9lxBgxoXEoGm3yiF7xMtFPNIEOTbbgG-WcV6I6jGhLj4AKoRJS_M2g2m5g132WKRTgWSLO4D4sL05lRPAATNq2h3bD72vFGm_Zk-r53dJGBe7FlHIcTV6rU85XD7wwF5sKtmddNbO9nbKg1L-W5pGcU-Ntvx9ayUmxMmGck0FXhf3saN6Qys_dh_C31jy1StMNeceswq1cH8712PvVmca1uNircDdNUbgKIstcn2Q3Egw1w_P5fJ17H6Ru7ZB8gmgEtivx8enUeE_TknyYz37p71GEGCg9-E2m5bl9YaUNTnODjQ2Lh8xeXYnsnCFkvw-XTlWFi799mxtjQFbPK32oAbV728dCld7eB8oTcvB4msAah-hukPKOr83q4GeiZlUe-w_L9hXzFDXF5d86CQbD7ypeUnlhdMaZi8KXOXrkEUMD_njXWSFEh9Xdcnt87Yvkz7VqRxbDHUz4Nid5oiUFAYtUgV917fg1PHroY1Iy0R3g97GXAxHsVc0PfzKLcKgZvoDVURscN8jlpDvbwGfiJ_4HwRHFRys=w1080-h1440-no"
          />
          <meta property="og:title" content="Adenekan Wonderful" />
          <meta property="og:url" content="https://codewonders.dev" />
          <meta
            property="og:image"
            content="https://i.ibb.co/jz5Qwx1/Group-7.png"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Adenekan Wonderful"
          />
          <meta name="next-head-count" content="21" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Extrabold.otf");
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Regular.otf");
                font-weight:normal;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Medium.otf");
                font-weight:500;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Bold.otf");
                font-weight:600;
                font-display:swap;
                font-style:normal
              }
            `,
            }}
          />
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
