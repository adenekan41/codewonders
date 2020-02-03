import React, { useContext } from 'react';
import styled from 'styled-components';

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';

const Projects = () => {
	const projectsData = useContext(ProjectsContext);
	return (
		<Layout title="Project">
			<Header>
				<PageWrapper>
					<h1 className="intro__text">Projects.</h1> <br />
					<Tabs>
						<TabItems label="All">
							<MansoryLayout>
								{projectsData.map((item, index) => (
									<MansoryItem key={index} index={index} item={item} />
								))}
							</MansoryLayout>
						</TabItems>
						<TabItems label="Projects">
							<MansoryLayout>
								{projectsData.map(
									(item, index) =>
										item.type.includes('project') && (
											<MansoryItem key={index} index={index} item={item} />
										)
								)}
							</MansoryLayout>
						</TabItems>
						<TabItems label="Dev Tools">
							<MansoryLayout>
								{projectsData.map(
									(item, index) =>
										item.type.includes('tools') && (
											<MansoryItem key={index} index={index} item={item} />
										)
								)}
							</MansoryLayout>
						</TabItems>
						<TabItems label="Open Source">
							<MansoryLayout>
								{projectsData.map(
									(item, index) =>
										item.type.includes('open-source') && (
											<MansoryItem key={index} index={index} item={item} />
										)
								)}
							</MansoryLayout>
						</TabItems>
						<TabItems label="Others">
							<MansoryLayout>
								{projectsData.map(
									(item, index) =>
										item.type.includes('others') && (
											<MansoryItem key={index} index={index} item={item} />
										)
								)}
							</MansoryLayout>
						</TabItems>
					</Tabs>
				</PageWrapper>
			</Header>
			<Section>
				<PageWrapper>
					<FooterLink goto="/articles" className="mt-3 mb-5">
						Lets Go To My Articles.
					</FooterLink>
					<br />
				</PageWrapper>
			</Section>
		</Layout>
	);
};
const Header = styled.header`
	.intro__text {
		font-size: 54px;
		font-weight: 900;
		margin: 4rem 0rem 1.5rem;
		position: relative;
	}
	button {
		font-size: 16px;
		background: var(--mark);
		border: none;
		border-radius: 5px;
		padding: 0px 9px;
	}
	ul.timeline {
		list-style-type: none;
		position: relative;
		&:before {
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
				font-size: 18px;
				font-weight: 500;
				color: var(--cw);
			}
			a svg {
				margin-top: -0.4rem;
				zoom: 60%;
			}
		}
	}
`;
const Section = styled.div``;
export default Projects;
