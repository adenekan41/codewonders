import React from 'react'
import styled from 'styled-components'
import { Layout, PageWrapper } from '../components/Layout/layout'
import Link from 'next/link'

const ResumeStyle ={
    Container: styled.div`
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
        iframe{
            width: 100%;
            border: none;
            height: 700px;

        }
    `
} 
const Resume = () => {
    const resumeData = "https://drive.google.com/file/d/1kKHGL-RchL3YnyRVvvHTmZoyb8KbGqa3/preview"
    const previewData = resumeData.substr(0, resumeData.lastIndexOf('/') + 1) + "view?usp=sharingC";
    return (
        <Layout>
            <PageWrapper>
                <ResumeStyle.Container>
                    <h1 className="intro__text">Resumé.</h1>
                    <p>Reach out to me via my <b><Link href="/contact">contact page</Link></b> or download the resume <b><a href={previewData} target="_blank" rel="noopener noreferrer" aria-label="Go to Resumé Page">download</a></b></p><br/>
                    <iframe src={resumeData} width="640" height="480"></iframe>
                </ResumeStyle.Container>
            </PageWrapper>
        </Layout>
    )
}
export default Resume