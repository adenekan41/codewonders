import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Tab from './Tab';

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);
	const onClickTabItem = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="tabs">
			<Wrapper className="d-md-flex d-block">
				{children.map((child) => {
					const { label } = child.props;

					return (
						<Tab
							activeTab={activeTab}
							key={label}
							label={label}
							onClick={onClickTabItem}
						/>
					);
				})}
			</Wrapper>
			<div className="tab-content">
				{children.map((child) => {
					if (child.props.label !== activeTab) return false;
					return child.props.children;
				})}
			</div>
		</div>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 43px;

	@media (max-width: 585px) {
		white-space: nowrap;
		overflow-x: auto;
		margin: 0px auto;
	}
	@media (max-width: 989px) {
		white-space: nowrap;
		overflow-x: auto;
		margin: 0px auto;
	}
	@media (max-width: 220px) {
		white-space: nowrap;
		overflow-x: auto;
		margin: 0px auto;
	}
	.tab-list-item {
		margin: 0 1rem 0 0;
		font-size: 15px;
		transition: all 0.3s ease;
		background: transparent;
		color: var(--gray);
		&.tab-list-active {
			font-weight: 900 !important;
			color: var(--cw);
			background: var(--mark);
			padding: 5px 22px;
		}
	}
`;

export const TabItems = styled.div``;
Tabs.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
};
export default Tabs;
