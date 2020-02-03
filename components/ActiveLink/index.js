import { withRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  router: PropTypes.any,
  children: PropTypes.any,
  activeClassName: PropTypes.string,
  href: PropTypes.any,
};
export default withRouter(ActiveLink);
