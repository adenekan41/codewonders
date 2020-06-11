/* -------------------------------------------------------------------------- */
/*                           External Dependencies                        */
/* -------------------------------------------------------------------------- */

import React, { Children } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

/* -------------------------- ActiveLink PropTypes -------------------------- */
const propTypes = {
  router: PropTypes.any,
  children: PropTypes.any,
  activeClassName: PropTypes.string,
  href: PropTypes.any,
};

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';

  const { href, activeClassName } = props;

  if (router.pathname === href && activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = propTypes;

export default withRouter(ActiveLink);
