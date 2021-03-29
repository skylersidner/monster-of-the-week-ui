import React from 'react';
import { Link } from 'react-router-dom';

function PrimaryMenuLink({ menuLink, isCurrent = false }) {
  const defaultClasses = "text-white hover:bg-indigo-500 hover:bg-opacity-75";
  const currentClasses = "bg-indigo-700 text-white";
  const classes = "block px-3 py-2 rounded-md text-sm font-medium " + (isCurrent ? currentClasses : defaultClasses)
  return (
    <Link to={menuLink.link} className={classes}>
      {menuLink.name}
    </Link>
  )
}

export default PrimaryMenuLink;