import App, {  } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import { Logo } from '../components/Layout/icons'
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
 
    return { pageProps }
  }
 
  render() {
    const { Component, pageProps } = this.props
    return (
        <React.Fragment>
            <PageTransition
            timeout={200}
            classNames="page-transition"
            loadingDelay={100}>
            <Component {...pageProps} key={Math.floor(Math.random() * Math.floor(20))} />
            </PageTransition>
            <style jsx global>{`
            .page-transition-enter {
                opacity: 0;
            }
            .page-transition-enter-active {
                opacity: 1;
                transition: opacity 300ms;
            }
            .page-transition-exit {
                opacity: 1;
            }
            .page-transition-exit-active {
                opacity: 0;
                transition: opacity 300ms;
            }
            `}</style>
        </React.Fragment>
        
    )
  }
}