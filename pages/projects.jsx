import React from 'react'
import  {Layout, PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import FooterLink from '../components/Utils/footer-link';
import Tabs from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import PROJECTS_DATA from '../components/CardData/projects';

const ProjectsStyle = {
  Header: styled.header`
    
    .intro__text{
      font-size: 54px;
      font-weight: 900; 
      margin: 4rem 0rem 1.5rem ;
      position: relative;
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
class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
        projects: PROJECTS_DATA
    }
  }
  render(){    
    const { projects } = this.state
    return (
      <Layout title="Project">
        <ProjectsStyle.Header>
          <PageWrapper>
           <h1 className="intro__text">Projects.</h1> <br/>
           <Tabs>
                <div label="All">
                    <MansoryLayout>
                        {
                            projects.map((item,index) => (
                                <MansoryItem key={index} index={index} item={item}/>
                            ))
                        }
                    </MansoryLayout>
                </div>
                <div label="Projects">
                  <MansoryLayout>
                    {
                      projects.map((item, index) => item.type.includes('project') && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Dev Tools">
                  <MansoryLayout>
                    {
                      projects.map((item, index) => item.type.includes('tools') && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Open Source">
                  <MansoryLayout>
                      {
                        projects.map((item, index) => item.type.includes('open-source') && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Others">
                  <MansoryLayout>
                      {
                        projects.map((item, index) => item.type.includes('others') && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
            </Tabs>
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
  