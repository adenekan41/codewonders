import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TabStyle = styled.span`

`
class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
    <TabStyle>
        <button
            className={className}
            onClick={onClick}
            aria-label={`Open ${label}`}
        >
            {label}
        </button>
    </TabStyle>
      
    );
  }
}

export default Tab;