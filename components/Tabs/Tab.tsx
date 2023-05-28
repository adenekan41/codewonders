/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* ------------------------------ Tab PropTypes ----------------------------- */
interface TabProps {
  activeTab: string;
  label: string;
  onClick: (label: string) => void;
  href?: string;
  [key: string]: unknown;
}

const Tab: React.FC<TabProps> = ({
  activeTab,
  label,
  onClick,
  href,
  ...rest
}) => {
  if (href) {
    return (
      <a
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        href={href}
        id="cardHover"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${label}`}
        {...rest}
      >
        {label}
      </a>
    );
  }
  return (
    <>
      <button
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        type="button"
        id="cardHover"
        onClick={() => onClick(label)}
        aria-label={`Open ${label}`}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};

export default Tab;
