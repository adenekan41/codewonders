import React from 'react'
import Layout, { PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import { IconRight, Location } from '../components/Layout/icons';

const AboutStyle = {
  Header: styled.header`
    
    .intro__text{
      font-size: 54px;
      font-weight: 900; 
      margin: 2rem 0rem 1.5rem ;
      position: relative;
    }
    p{
      font-size: 16px;
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
        }
    }
  ` ,
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
           <h1 className="intro__text">About Me.</h1>
            <ul class="timeline">
                <li>
                    <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
                    <a href="#" class="float-right"><Location /> Somewhere on Earth</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                </li>
                <li>
                    <a href="#">21 000 Job Seekers</a>
                    <a href="#" class="float-right">4 March, 2014</a>
                    <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                </li> 
                <li>
                    <a href="#">Awesome Employers</a>
                    <a href="#" class="float-right">1 April, 2014</a>
                    <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                </li>
            </ul>
          </PageWrapper>
        </AboutStyle.Header>
      </Layout> 
    )
  }
}

export default About
  