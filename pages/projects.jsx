import React from 'react'
import Layout, { PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import {Date } from '../components/Layout/icons';
import FooterLink from '../components/Utils/footer-link';
import Tabs from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';

const ProjectsStyle = {
  Header: styled.header`
    
    .intro__text{
      font-size: 54px;
      font-weight: 900; 
      margin: 4rem 0rem 1.5rem ;
      position: relative;
    }
    /* p{
      font-size: 15px;
      margin-top: .6rem;
      line-height: 2;
      font-weight: 400;
      color: var(--article-color) !important;
    } */
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
class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
            {
                title:'Shoprrr',
                description: 'An E-commerce Application For Buying Cotton Products.',
                link: 'https://shoprrr.netlify.com',
                imageUrl: 'https://i.ibb.co/pW8TLch/Screen-Shot-2019-11-23-at-2-11-51-PM.png',
                type:'portfolio'
            },
            {
                title:'54gene',
                description: 'Discover Yourself Through Your Genes.',
                link: 'https://getthefuck.com',
                imageUrl: 'https://i.ibb.co/Z85CmV8/Screen-Shot-2019-11-23-at-1-48-13-PM.png',
                type:'portfolio'
            },
            {
                title:'Zeedas',
                description: 'Engineering Team On Steriod.',
                link: 'https://zeedas.com',
                imageUrl: 'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
                type:'portfolio'
            },
            {
                title:'Nester Verify',
                description:'An online web application for address and guarantor verification',
                link: 'https://nesterverify.com',
                imageUrl: 'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
                type:'portfolio'
            },
            {
                title:'Nester Pod',
                description: 'Manage All Your Logistics in One Place',
                link: 'https://nesterpod.com',
                imageUrl: 'https://i.ibb.co/nfnG7F6/Screen-Shot-2019-11-23-at-2-17-06-PM.png',
                type:'portfolio'
            },
            {
                title:'Bloverse',
                description: 'A content creation platform fostering a global community of engaged and insightful individuals',
                link: 'https://bloverse.com',
                imageUrl: 'https://i.ibb.co/s5ppyjx/Screen-Shot-2019-11-23-at-2-17-57-PM.png',
                type:'projects'
            },
            {
                title:'NG Elearning',
                description: 'Learn a New Skill, Boost Your Career',
                link: 'https://ngcareers.com',
                imageUrl: 'https://i.ibb.co/ykQmbVw/Screen-Shot-2019-11-23-at-2-20-17-PM.png',
                type:'others'
            },
            {
                title:'Joblink',
                description: 'Get to know everything about teaching and living in China',
                link: 'https://joblink4u.com',
                imageUrl: 'https://i.ibb.co/Zfs0nNB/Screen-Shot-2019-11-23-at-2-21-16-PM.png',
                type:'portfolio'
            },
            {
                title:'Truegiven',
                description: 'Addressing current and future workforce needs',
                link: 'https://truegiven.com',
                imageUrl: 'https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png',
                type:'portfolio'
            },
            {
                title:'Farmhub360',
                description: 'Our goal is to help Customers to get fresh foods within the shortest possible time.',
                link: 'https://farmhub360.com',
                imageUrl: 'https://i.ibb.co/XWjV6k0/Screen-Shot-2019-11-23-at-2-25-40-PM.png',
                type:'portfolio'
            },
            {
                title:'70Shops',
                description: 'Helps business owners create an eCommerce platform for their businesses',
                link: 'https://joblink4u.com',
                imageUrl: 'https://i.ibb.co/q939Wxd/Screen-Shot-2019-11-23-at-2-27-08-PM.png',
                type:'portfolio'
            },
            {
                title:'Bellza',
                description: 'Discover & access to on-demand Information leisure and utility over the world from your chrome.',
                link: 'https://bellza.surge.sh',
                imageUrl: 'https://i.ibb.co/VNh4BNS/Screen-Shot-2019-11-23-at-2-29-40-PM.png',
                type:'tools'
            },
            {
                title:'Despatch',
                description: 'Local Same Day Delivery Courier Specialists For Personal / Business Clients.',
                link: 'https://despatch.com.ng',
                imageUrl: 'https://i.ibb.co/RcgJt6w/Screen-Shot-2019-11-23-at-2-31-47-PM.png',
                type:'portfolio'
            },
            {
              title:'Atara Pay',
              description: 'Buy and Sell Anywhere with Zero Risk',
              link: 'https://atarapay.com',
              imageUrl: 'https://i.ibb.co/dk7bZ9L/Screen-Shot-2019-11-23-at-3-16-38-PM.png',
              type:'portfolio'
          },
          {
              title:'Iyanu',
              description: 'Social Conscience As A Service',
              link: 'https://iyanu.io',
              imageUrl: 'https://i.ibb.co/VBk5JzH/Screen-Shot-2019-11-23-at-3-17-50-PM.png',
              type:'portfolio'
          },
          {
            title:'Payer',
            description: 'The Easietst way To But Airtime Make Payments,',
            link: 'https://adenekan41.github.io/payer',
            imageUrl: 'https://i.ibb.co/6ZHSPH0/Screen-Shot-2019-11-23-at-3-19-39-PM.png',
            type:'others'
        },
        {
          title:'Drum Root',
          description: 'A React Web App for Creating and Sharing Drum Loops.',
          link: 'https://github.com/zero-to-mastery/drum-root',
          imageUrl: 'https://i.ibb.co/8MG46Ts/Smart-Select-20191111-111937-Fiverr.jpg',
          type:'open-source'
      },
        ]
    }
  }
  render(){    
    return (
      <Layout title="Project">
        <ProjectsStyle.Header>
          <PageWrapper>
           <h1 className="intro__text">Projects.</h1> <br/>
           <Tabs>
                <div label="All">
                    <MansoryLayout>
                        {
                            this.state.data.map((item,index) => (
                                <MansoryItem key={index} index={index} item={item}/>
                            ))
                        }
                    </MansoryLayout>
                </div>
                <div label="Projects">
                    After 'while, <em>Crocodile</em>!
                </div>
                <div label="Dev Tools">
                  <MansoryLayout>
                    {
                      this.state.data.map((item, index) => item.type === 'tools' && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Open Source">
                  <MansoryLayout>
                      {
                        this.state.data.map((item, index) => item.type === 'open-source' && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Others">
                  <MansoryLayout>
                      {
                        this.state.data.map((item, index) => item.type === 'others' && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
            </Tabs>
           <h4>My Portfolio.</h4>
          </PageWrapper>
        </ProjectsStyle.Header>
        <ProjectsStyle.SkillSection>
          <PageWrapper>
            <FooterLink goto="/articles" className="mt-3 mb-5">Lets Go To My Articles.</FooterLink>
            <br/>
          </PageWrapper>
        </ProjectsStyle.SkillSection>
      </Layout> 
    )
  }
}

export default Projects
  