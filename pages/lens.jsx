import React from 'react'
import  {Layout, PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import {Date } from '../components/Layout/icons';
import FooterLink from '../components/Utils/footer-link';
import Tabs from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';

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
class Lens extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
            {
                title:'Ray Ban',
                description: 'Model: RB3539',
                link: 'https://www.selectspecs.com/sunglasses/ray-ban/rb3539/ss105.57.html',
                imageUrl: 'https://i.ibb.co/mvCf7vN/105-57-2.jpg',
                type:['ray-ban']
            },
            {
                title:'Ray Ban',
                description: 'Model: RB3647N',
                link: 'https://www.selectspecs.com/sunglasses/ray-ban/rb3647n/ss106.08.html',
                imageUrl: 'https://i.ibb.co/jySj3HY/106-08-1.jpg',
                type:['ray-ban']
            },
            {
                title:'Ray-Ban',
                description: 'Model: RB3136 Aviator',
                link: 'https://www.selectspecs.com/sunglasses/ray-ban/rb3136-aviator-caravan-flash-lenses/ss105.24.html',
                imageUrl: 'https://i.ibb.co/vX3B6j4/105-24-5.jpg',
                type:['ray-ban']
            },
            {
                title:'Persol',
                description:'Model: PO3199S',
                link: 'https://www.selectspecs.com/sunglasses/persol/po3199s',
                imageUrl: 'https://i.ibb.co/wKtdt70/653-57-3.jpg',
                type:['persol']
            },
            {
                title:'Persol',
                description: 'Model: PO3171S',
                link: 'https://www.selectspecs.com/sunglasses/persol/po3171s',
                imageUrl: 'https://i.ibb.co/GVp7FdB/653-38-4.jpg',
                type:['persol']
            },
            {
                title:'EdBlue',
                description: 'Model: Prism - PL5428',
                link: 'https://www.eyebuydirect.com/packages/ebd-blue',
                imageUrl: 'https://i.ibb.co/Y3Rdny1/pl5428-1-1.png',
                type:['Edblue']
            },
            {
                title:'EdBlue',
                description: 'Model: Melody - MT6300',
                link: 'https://www.eyebuydirect.com/packages/ebd-blue',
                imageUrl: 'https://i.ibb.co/nfFY5R8/mt6300-1.png',
                type:['Edblue']
            },
            {
                title:'EdBlue',
                description: 'Model: Memento - MT6641',
                link: 'https://www.eyebuydirect.com/packages/ebd-blue',
                imageUrl: 'https://i.ibb.co/cc3jHjx/mt6641-1.png',
                type:['Edblue']
            },
            {
                title:'SightRelax',
                description: 'Model: Nadia - MT6772',
                link: 'https://www.eyebuydirect.com/packages/sightrelax',
                imageUrl: 'https://i.ibb.co/SxCtgBK/mt6772-1.png',
                type:['sight-relax']
            },
            {
                title:'SightRelax',
                description: 'Model: Contact - MT6772',
                link: 'https://www.eyebuydirect.com/packages/sightrelax',
                imageUrl: 'https://i.ibb.co/9cCfYCS/mt6707-1.png',
                type:['sight-relax']
            },
        ]
    }
  }
  render(){    
    return (
      <Layout title="Lens">
        <LensStyle.Header>
          <PageWrapper>
           <h1 className="intro__text">Lens.</h1> <br/>
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
                <div label="Ray Ban">
                  <MansoryLayout>
                    {
                      this.state.data.map((item, index) => item.type.includes('ray-ban') && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Persol">
                  <MansoryLayout>
                    {
                      this.state.data.map((item, index) => item.type.includes('persol') && (
                          <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="EdBlue">
                  <MansoryLayout>
                      {
                        this.state.data.map((item, index) => item.type.includes('Edblue') && (
                            <MansoryItem key={index} index={index} item={item}/>
                      ))
                    }
                  </MansoryLayout>
                </div>
                <div label="Sight Relax">
                  <MansoryLayout>
                      {
                        this.state.data.map((item, index) => item.type.includes('sight-relax') && (
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
}

export default Lens
  