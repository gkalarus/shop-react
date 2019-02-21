import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  {name: "Welcome", path: "/", exact: true},
  {name: "Shop", path: "/shop"},
  {name: "Log in", path: "/login"},
  {name: "Order", path: "/order"},
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ));

  return (  
    <nav className="navigation">
      <ul>
        {menu}
      </ul>
    </nav>
  );
}
 

export default Navigation;