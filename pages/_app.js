import App from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import AppContext from '../components/Utils/context'
import { loadState, clearState, saveState } from '../components/Utils/localstorage'
export default class MyApp extends App {
    constructor(){
        super();
        this.state = {
            show:false,
            theme: loadState() ? true : false,
        }
    }
    loadTheme = () => {
        const {theme} = this.state
        if(theme == false){
            clearState()
        }else{
            saveState(1)
        }
    }
    handleopen = () => {
        const {show} = this.state
        this.setState({show: !show})
    }
    setTheme = () => {
        const {theme} = this.state
        this.closeShow()
        this.setState({theme: !theme})
    }
    closeShow = () => {
        const {show} = this.state
        this.setState({show: false})
    }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
 
    return { pageProps }
  }
  
  render() {
    const { Component, pageProps } = this.props
    return (
        <>
            <PageTransition
            timeout={200}
            classNames="page-transition"
            loadingDelay={100}>
                <AppContext.Provider key={Math.floor(Math.random() * Math.floor(20))}  value={{show: this.state.show, theme: this.state.theme, loadTheme:this.loadTheme, setTheme: this.setTheme, handleopen: this.handleopen, closeShow: this.closeShow}}>
                    <Component {...pageProps} />
                </AppContext.Provider>
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
        
        </>
    )
  }
}