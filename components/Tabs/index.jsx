import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import styled from 'styled-components'

const TabStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 43px;
    .tab-list-item {
        margin: 0 1rem 0 0;
        font-size: 15px;
        transition: all .3s ease;
        background: transparent;
        color: var(--gray);
        &.tab-list-active {
            font-weight: 900 !important;
            color: var(--bw);
            background: var(--mark);
            padding: 5px 22px;
        }
    }

`
class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <TabStyle>
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
        </TabStyle>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return false;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;