import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  {name: "start", path: "/", exact: true},
  {name: "produkty", path: "/products"},
  {name: "logowanie", path: "/login"},
  {name: "zamówienie", path: "/order"},
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