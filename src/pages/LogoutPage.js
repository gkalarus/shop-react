import React from 'react';

const LogoutPage = ({user, handleLogOut}) => {
  if(user !== null) {
    return (  
      <div><p>Hello {user.name} {user.surname} if you want to log out of your account, click on the button below</p>...<button onClick={handleLogOut}>Log out</button></div>
    );
  } else {
    return null
  }
}
 
export default LogoutPage;