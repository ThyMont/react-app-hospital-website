import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuItem({ link }) {
  return (
    <Fragment>
      <NavLink
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        activeClassName="text-yellow-300"
        to={link.linkTo}
      >
        {link.name}
      </NavLink>
    </Fragment>
  );
}
