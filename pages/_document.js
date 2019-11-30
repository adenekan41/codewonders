import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
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
            <meta name="keywords" content="codewonders , codewonders.us , codewonder.dev , start up design, software, code, tech, computer stuff, store, couture, html, css, javascript, websites, website development, web development, design, ui, ux , adenekan wonderful , code_wonders" />
            <meta property="og:locale" content="en-US" />
            <meta property="og:type" content="website" />
            <meta name="description" content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."/>
            <meta name="og:description" content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-config' content='/icons/browserconfig.xml' />
            <meta name="twitter:site" content="@code_wonders"/>
            <meta name="twitter:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png"/>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <link rel='icon' href='/favicon.ico' />
            <link rel='manifest' href='/manifest.json' />
            <meta name="og:title" content="Adenekan Wonderful"/>
            <meta name="og:url" content="https://codewonders.dev"/>
            <meta name="og:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png"/>
            <meta name="apple-mobile-web-app-title" content={`Adenekan Wonderful`}/>
            <meta name="next-head-count" content="21"/>
            <style dangerouslySetInnerHTML={{__html: `
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-Bold.woff2") format("woff2");
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-Regular.woff2") format("woff2");
                font-weight:normal;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-Medium.woff2") format("woff2");
                font-weight:500;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-SemiBold.woff2") format("woff2");
                font-weight:600;
                font-display:swap;
                font-style:normal
              }
            `}}/>
            <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
