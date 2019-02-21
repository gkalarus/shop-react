import React from 'react';
import '../styles/LogoutPage.css';

const LogoutPage = ({user, handleLogOut}) => {
  if(user !== null) {
    return (  
      <div className="logoutPage">
        <p>Hello <strong>{user.name} {user.surname}</strong> if you want to log out of your account, click on the button below...</p>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    );
  } else {
    return null
  }
}
 
export default LogoutPage;