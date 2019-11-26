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
            <meta name="keywords" content="codewonders , codewonders.us , start up design, software, code, tech, computer stuff, store, couture, html, css, javascript, websites, website development, web development, design, ui, ux , adenekan wonderful , code_wonders" />
            <meta property="og:locale" content="en-US" />
            <meta property="og:type" content="website" />
            <meta name="description" content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."/>
            <meta name="og:description" content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@code_wonders"/>
            <meta name="twitter:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png"/>
            <meta name="og:title" content="Adenekan Wonderful"/>
            <meta name="og:url" content="https://codewonders.us"/>
            <meta name="og:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png"/>
            <meta name="apple-mobile-web-app-title" content={`Adenekan Wonderful`}/>
            <meta name="next-head-count" content="21"/>
            <style dangerouslySetInnerHTML={{__html: `
                @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-Bold.woff2") format("woff2");
                font-weight:bold;
                font-display:fallback;
                font-style:normal
                }
                
                @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-Regular.woff2") format("woff2");
                font-weight:normal;
                font-display:fallback;
                font-style:normal
                }
                @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-Medium.woff2") format("woff2");
                font-weight:500;
                font-display:fallback;
                font-style:normal
                }
                @font-face{
                font-family:'Blorado';
                src:url("/fonts/BRFirmaCW-SemiBold.woff2") format("woff2");
                font-weight:600;
                font-display:fallback;
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
