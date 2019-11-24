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
                    <a target="_blank" href="https://www.plusacumen.org/courses/introduction-human-centered-design">Human Centered Design 101. <small>Acumen</small></a>
                    <a className="float-right"><Date /> <b>2017 - 2018</b></a>
                    <p>This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to people and test your ideas. You’ll leave this experience equipped and energized to apply the human-centered design process to challenges across industries, sectors, and geographies to generate breakthrough ideas.</p>
                </li>
                <li>
                    <a target="_blank" href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/">Data Structure And Algorithm. <small>Udemy</small></a>
                    <a href="#" className="float-right"><Date /> <b>2019</b></a>
                    <p>Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science is the fact that they don't have knowledge about algorithms, data structures and the notorious Big-O Notation</p>
                </li> 
                <li>
                    <a target="_blank" href="https://www.edx.org/course/adaptive-leadership-in-development">Adaptive Leadership. <small>edX</small></a>
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
          <h4>My Volunteer Experience.</h4>
            <ul className="timeline">
                <li>
                    <a target="_blank" href="https://freecodecamp.com">Mentor. <small>Freecodecamp</small></a>
                    <a className="float-right"><Date /> <b>2018 - Present</b></a>
                    <p>Helped set goals and work toward achieving them by educating four mentees about various resources available on campus, as the need arises Served as a positive social and academic role-model by supporting mentees with their involvement on campus Provided an environment that supports constructive feedback on performance</p>
                </li>
                <li>
                    <a href="https://jobs.google.com" target="_blank">Local Guide. <small>google</small></a>
                    <a className="float-right"><Date /> <b>2019</b></a>
                    <p>I spoke and introduced the user to the newly on-boarded product at jobs at google here. also Increased revenue by designing eye-catching displays and utilizing selling techniques to connect with potential customers, thereby closing sales.</p>
                </li> 
                <li>
                    <a href="https://developers.google.com">Programmes Developer. <small>Google Developers</small></a>
                    <a className="float-right"><Date /> <b>2019 - Present</b></a>
                    <p>Developer Student Clubs train thousands of student developers globally and work with their communities to solve real-life problems. University students who lead a DSC gain access to Google technology, events, and mentorship while training their local community through fun meetups, project building activities, and global competitions.</p>
                </li>
                <li>
                    <a href="https://forloop.africa" target="_blank">Media Specialist. <small>Forloop Africa</small></a>
                    <a href="#" className="float-right"><Date /> <b>2018 - Present</b></a>
                    <p>A community of passionate software developers and enthusiasts across Africa.</p>
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
  