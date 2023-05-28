/* -------------------------------------------------------------------------- */
/*                           External Dependencies                        */
/* -------------------------------------------------------------------------- */

import React, { ComponentPropsWithRef } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

/* -------------------------- ActiveLink PropTypes -------------------------- */
interface IActiveLink extends LinkProps, Omit<ComponentPropsWithRef<'a'>, keyof LinkProps>{
  activeClassName?: string;
}

const ActiveLink: React.FC<IActiveLink> = ({ children, ...props }) => {
  const router = useRouter();
  let className = props.className || '';

  const { href, activeClassName } = props;

  if (router.pathname === href && activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  if (props.activeClassName) delete props['activeClassName'];

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default ActiveLink;
