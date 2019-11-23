import React from 'react'
import Layout, { PageWrapper } from '../components/Layout/layout'
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
                    <a target="_blank" href="https://www.totoprayogo.com/#">Human Centered Design 101. <small>Acumen</small></a>
                    <a href="#" className="float-right"><Date /> <b>2017 - 2018</b></a>
                    <p>This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to people and test your ideas. You’ll leave this experience equipped and energized to apply the human-centered design process to challenges across industries, sectors, and geographies to generate breakthrough ideas.</p>
                </li>
                <li>
                    <a href="#">Data Structure And Algorithm. <small>Udemy</small></a>
                    <a href="#" className="float-right"><Date /> <b>2019</b></a>
                    <p>Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science is the fact that they don't have knowledge about algorithms, data structures and the notorious Big-O Notation</p>
                </li> 
                <li>
                    <a href="#">Adaptive Leadership. <small>Udacity</small></a>
                    <a href="#" className="float-right"><Date /> <b>2019</b></a>
                    <p>This introductory course helps you identify and make progress on a leadership challenge in your own life, team, or community. You’ll apply the tools and techniques of Adaptive Leadership, a practical framework developed at Harvard Kennedy School of Government for leading change, particularly during times of uncertainty or when there are no easy answers.  </p>
                </li>
                <li>
                    <a href="#">Learning Something Great 😉</a>
                    <a href="#" className="float-right"><Date /> <b>Currently</b></a>
                    <p>We continue learning everyday.  </p>
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
  