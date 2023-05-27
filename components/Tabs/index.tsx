/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

/* -------------------------- Internal Dependecies -------------------------- */
import styled from 'styled-components';
import Tab from './Tab';

const Tabs: React.FC<PropsWithChildren> = ({ children }) => {
  const pickOneChild = React.Children.toArray(children)[0] as ReactElement;
  const [activeTab, setActiveTab] = useState<string>(pickOneChild.props.label);

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Wrapper className="d-md-flex d-block tabs" role="tablist">
        {children &&
          React.Children.map(children as any, (child: ReactElement) => {
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
        {React.Children.map(children as any, (child: ReactElement) => {
          return child.props.label === activeTab && child.props.children;
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

export const TabItems = styled.div<{
  label?: string;
  href?: string;
}>`
  display: block;
`;

export default Tabs;
