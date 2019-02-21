import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  {name: "Welcome", path: "/", exact: true},
  {name: "Shop", path: "/shop"},
  {name: "Log in", path: "/login"},
  {name: "Order", path: "/order"},
]

const list2 = [
  {name: "Welcome", path: "/", exact: true},
  {name: "Shop", path: "/shop"},
  {name: "Log out", path: "/logout"},
  {name: "Order", path: "/order"},
]


const Navigation = ({user}) => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  )); 

  const menu2 = list2.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  )); 

  if(user === null) {
    return (  
      <nav className="navigation">
        <ul>
          {menu}
        </ul>
      </nav>
    );
  } else {
    return (  
      <nav className="navigation">
        <ul>
          {menu2}
        </ul>
      </nav>
    );
  }


}
 

export default Navigation;