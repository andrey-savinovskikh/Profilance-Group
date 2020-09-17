import React from 'react';
import classes from './Menu.module.scss';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  const links = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/events', label: 'Новости', exact: false}
  ]

  return (
    <nav className={classes.menu}>
      <ul className={classes.list}>
        {renderLinks(links)}
      </ul>
    </nav>
  )
}

function renderLinks(links) {
  return links.map((link, index) => {
    return (
      <li className={classes.item} key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          className={classes.link}
          activeClassName={classes.active}
        >
          {link.label}
        </NavLink>
      </li>
    );
  });
}

export default Menu
