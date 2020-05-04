import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, label, onClick, ...rest }) => {
  return (
    <>
      <button
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        type="button"
        onClick={() => onClick(label)}
        aria-label={`Open ${label}`}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Tab;
