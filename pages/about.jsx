import React from 'react'
import {Layout, PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import {Date } from '../components/Layout/icons';
import FooterLink from '../components/Utils/footer-link';

const AboutStyle = {
  Header: styled.header`
    
    .intro__text{
      font-size: 54px;
      font-weight: 900; 
      margin: 4rem 0rem 1.5rem ;
      position: relative;
    }
    p{
      font-size: 15px;
      margin-top: .6rem;
      line-height: 2;
      font-weight: 400;
      color: var(--article-color) !important;
    }
    button{
      font-size: 16px;
      background: var(--mark);
      border: none;
      border-radius: 5px;
      padding: 0px 9px;  
    }
    ul.timeline {
        list-style-type: none;
        position: relative;
        &:before{
            content: ' ';
            background: #d4d9df;
            display: inline-block;
            position: absolute;
            left: 0px;
            width: 1px;
            height: 100%;
            z-index: 400;
        }
        li {
            margin: 3rem 0;
            padding-left: 20px;
            &:before{
                content: ' ';
                background: var(--mark);
                display: inline-block;
                position: absolute;
                border-radius: 50%; 
                border: 2px solid var(--cw);
                left: -7px;
                width: 15px;
                height: 15px;
                margin-top: 3px;
                z-index: 400;
            }
            a{
              font-size: 18px;
              font-weight: 500;
              color: var(--cw);
            }
            a svg{
              margin-top: -.4rem;
              zoom: 60%;
            } 
        }
    }
    @media( max-width : 585px ) {
      ul.timeline li a{
        display:block;
        float:none !important;
        margin-top:5px;
      }
    }
    @media( max-width : 989px ) {
      ul.timeline li a{
        display:block;
        float:none !important;
        margin-top:5px;
      }
    }
    @media( max-width : 220px ){
      ul.timeline li a{
        display:block;
        float:none !important;
        margin-top:5px;
      }
    }
  ` ,
  SkillSection: styled.div`
    
  `
}
class About extends React.Component {
  constructor(){
    super();
  }
  render(){    
    return (
      <Layout title="About">
        <AboutStyle.Header>
          <PageWrapper>
           <h1 className="intro__text">About Me.</h1> <br/>
           <h4>My Education.</h4>
            <ul className="timeline">
                <li>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://www.plusacumen.org/courses/introduction-human-centered-design">Human Centered Design 101. <small>Acumen</small></a>
                    <a className="float-right"><Date /> <b>2017 - 2018</b></a>
                    <p>This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to people and test your ideas. You’ll leave this experience equipped and energized to apply the human-centered design process to challenges across industries, sectors, and geographies to generate breakthrough ideas.</p>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/">Data Structure And Algorithm. <small>Udemy</small></a>
                    <a href="#" className="float-right"><Date /> <b>2019</b></a>
                    <p>Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science is the fact that they don't have knowledge about algorithms, data structures and the notorious Big-O Notation</p>
                </li> 
                <li>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://www.edx.org/course/adaptive-leadership-in-development">Adaptive Leadership. <small>edX</small></a>
                    <a href="#" className="float-right"><Date /> <b>2019</b></a>
                    <p>This introductory course helps you identify and make progress on a leadership challenge in your own life, team, or community. You’ll apply the tools and techniques of Adaptive Leadership, a practical framework developed at Harvard Kennedy School of Government for leading change, particularly during times of uncertainty or when there are no easy answers.  </p>
                </li>
                <li>
                    <a href="#">Learning Something Great 😉</a>
                    <a className="float-right"><Date /> <b>Currently</b></a>
                    <p>We continue learning everyday.  </p>
                </li>
            </ul>
          </PageWrapper>
          <br/><br/>
          <PageWrapper>
           <h4>My Playlist.</h4>
            <ul className="timeline">
                <li>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V">Codewonders. <small>Spotify</small></a>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V" className="float-right" style={{fontSize: '15px',textDecoration: 'underline',}}>View Playlist</a>
                    <p>This is an intensive, energizing songs list that helps me through the day and inspires generate breakthrough ideas.</p>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS">Chill Lofi Study Beats <small>Spotify</small></a>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Open Link" href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS" className="float-right" style={{fontSize: '15px',textDecoration: 'underline',}}>View Playlist</a>
                    <p>The perfect study beats, twenty four seven. with over 178 SONGS</p>
                </li> 
            </ul>
          </PageWrapper>
          <br/><br/>
          <PageWrapper>
           <h4>My Photochromic Lens.</h4>
            <ul className="timeline">
                <li>
                    <Link href="/lens"><a>Adenekan's Collection. <small>©Adenekan</small></a></Link>
                    <Link href="/lens"><a className="float-right" style={{fontSize: '15px',textDecoration: 'underline',}}>Visit Page</a></Link>
                    <p>This is an intensive, curation of the photochromic lenses that standout and the ones that i personally love, NOTE this is just by preference actually.</p>
                </li>
            </ul>
          </PageWrapper>
        </AboutStyle.Header>
        <AboutStyle.SkillSection>
          <PageWrapper>
            <FooterLink goto="/projects" className="mt-3 mb-5">Lets Continue To Projects</FooterLink>
            <br/>
          </PageWrapper>
        </AboutStyle.SkillSection>
      </Layout> 
    )
  }
}

export default About
  