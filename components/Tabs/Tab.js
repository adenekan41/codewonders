import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabStyle = styled.span``;
const Tab = ({ activeTab, label, onClick }) => {
  return (
    <TabStyle>
      <button
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        type="button"
        onClick={() => onClick(label)}
        aria-label={`Open ${label}`}
      >
        {label}
      </button>
    </TabStyle>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Tab;
