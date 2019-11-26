import React, {useContext} from 'react'
import  {Layout, PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import {Date } from '../components/Layout/icons';
import FooterLink from '../components/Layout/footer-link';
import Tabs from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import LENS_DATA from '../components/AppData/lens';
import { LensContext } from '../components/Utils/context';

const LensStyle = {
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
const LensPage = () => {
    const lens = useContext(LensContext)
    return (
      <Layout title="Lens">
        <LensStyle.Header>
          <PageWrapper>
           <h1 className="intro__text">Lens.</h1> <br/>
           <Tabs>
                <div label="All">
                    <MansoryLayout>
                        {
                            lens.map((item,index) => (
                                <MansoryItem key={index} index={index} item={item}/>
                            ))
                        }
                    </MansoryLayout>
                </div>
                <div label="Ray Ban">
                  <MansoryLayout>
                    {
                      lens.map((item, index) => item.type.includes('ray-ban') && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Persol">
                  <MansoryLayout>
                    {
                      lens.map((item, index) => item.type.includes('persol') && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="EdBlue">
                  <MansoryLayout>
                      {
                        lens.map((item, index) => item.type.includes('Edblue') && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Sight Relax">
                  <MansoryLayout>
                      {
                        lens.map((item, index) => item.type.includes('sight-relax') && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
            </Tabs>
          </PageWrapper>
        </LensStyle.Header>
        <LensStyle.SkillSection>
          <PageWrapper>
            <FooterLink goto="/projects" className="mt-3 mb-5">Lets Go To My Projects.</FooterLink>
            <br/>
          </PageWrapper>
        </LensStyle.SkillSection>
      </Layout> 
    )
}

export default LensPage
  