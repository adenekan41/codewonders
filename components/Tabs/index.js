/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* -------------------------- Internal Dependecies -------------------------- */
import styled from 'styled-components';
import Tab from './Tab';

/* ------------------------------ Tab PropTypes ----------------------------- */
const propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Wrapper className="d-md-flex d-block tabs" role="tablist">
        {children.map((child) => {
          const { label, href } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              href={href}
              aria-current={activeTab}
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
    </>
  );
};

const Wrapper = styled.nav`
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
    font-size: calc(var(--font-sm) + 0.9px);
    transition: all 0.3s ease;
    background: transparent;
    color: var(--article-color);
    &.tab-list-active {
      font-weight: 900 !important;
      color: #e8e8e8;
      background: var(--gray-dark);
      padding: 5px 22px;
    }
  }
`;

export const TabItems = styled.div`
  display: block;
`;
Tabs.propTypes = propTypes;

export default Tabs;
