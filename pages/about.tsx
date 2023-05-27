/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/adenekan41"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/adenekan41"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  The power of first impressions cannot be underestimated, and
                  the gateway to capitalizing on them lies in exceptional
                  website design. An outstanding website transcends mere
                  aesthetics and extends its influence to encompass seamless
                  functionality and user-friendly navigation. Drawing upon my
                  expertise as a seasoned programmer, I possess the unique
                  ability to tackle intricate technical challenges while
                  crafting websites that exude sleekness and visual allure.
                  Moreover, my extensive knowledge of recognized technical
                  standards is complemented by my proficiency in modern building
                  practices, ensuring that every aspect of your website is
                  finely tuned to perfection.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Product{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Products
                </Link>
                <p>
                  While I may not fit the conventional mold of a product
                  manager, my diverse skill set in research, product design, and
                  product coordination empowers me to drive the growth of a
                  product from its inception. As an exceptional analytical
                  thinker, I possess the ability to uphold the product's vision
                  throughout its entire journey, effectively bridging the
                  technical and product aspects. By leveraging my expertise, I
                  can navigate the path from 0 to 1, ensuring the product's
                  success at every stage.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/codewonders"
                >
                  Design{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/codewonders"
                  className="float-right"
                >
                  View Dribbble
                </a>
                <p>
                  Despite not fitting the typical designer stereotype, my
                  exceptional visual abilities enable me to excel as a
                  presenter, effectively conveying design concepts to
                  stakeholders and design teams. I possess a remarkable aptitude
                  for conceptualization, allowing me to envision and bring forth
                  stunning creations. Additionally, my expertise lies in
                  fine-tuning stylesheets and crafting seamless user experiences
                  that flow effortlessly.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Reads.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Human Centered Design 101"
                  href="https://www.plusacumen.org/courses/introduction-human-centered-design"
                >
                  Human Centered Design 101. <small>Acumen</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2017 - 2018</b>
                </a>
                <p>
                  This is an intensive, hands-on learning experience that will
                  challenge you to get out of your chair and out into the real
                  world to talk to people and test your ideas. You’ll leave this
                  experience equipped and energized to apply the human-centered
                  design process to challenges across industries, sectors, and
                  geographies to generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                >
                  Data Structure And Algorithm. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  Many developers who are &quot;self taught&quot;, feel that one
                  of the main disadvantages they face compared to college
                  educated graduates in computer science is the fact that they
                  don&apos;t have knowledge about algorithms, data structures
                  and the notorious Big-O Notation
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.edx.org/course/adaptive-leadership-in-development"
                >
                  Adaptive Leadership. <small>edX</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  This introductory course helps you identify and make progress
                  on a leadership challenge in your own life, team, or
                  community. You’ll apply the tools and techniques of Adaptive
                  Leadership, a practical framework developed at Harvard Kennedy
                  School of Government for leading change, particularly during
                  times of uncertainty or when there are no easy answers.{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/"
                >
                  Learning to Learn [Efficient Learning] <small>udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Improve memory & productivity using the skills of the world's
                  top performers and learning strategies proven by research.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Learning Something Great 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p>We continue learning everyday. </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Playlist.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Codewonders Spotify Playlist"
                  href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
                >
                  Codewonders. <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="Open Lofii Playlist"
                  href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  This is an intensive, energizing songs list that helps me
                  through the day and inspires generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                >
                  Chill Lofi Study Beats <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  The perfect study beats, twenty four seven. with over 178
                  SONGS
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DWUACcBjzMiIY?si=KbZW7Cz1TpaABPXV_fH4-A"
                >
                  Mellow Drive <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DWUACcBjzMiIY?si=KbZW7Cz1TpaABPXV_fH4-A"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Easy listening for pleasant drive</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                >
                  Rap UK <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>One of the finest rap in UK. Cover: Aitch</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                >
                  Mood Booster 🎅🏽 <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Get happy with today's dose of feel-good songs!</p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper aria-label="You are now in lens section">
          <article>
            <h4>My Photochromic Lens.</h4>
            <ul className="timeline">
              <li>
                <Link href="/lens">
                  Adenekan's Collection. <small>©Adenekan</small>
                </Link>
                <Link href="/lens" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  This is an intensive, curation of the photochromic lenses that
                  standout and the ones that i personally love, NOTE this is
                  just by preference actually.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
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
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
