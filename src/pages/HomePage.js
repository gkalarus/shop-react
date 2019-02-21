import React from 'react';
import '../styles/Home.css'

const HomePage = ({homeClass}) => {
  return (  
    <div className={homeClass}>
      <h3>Find the perfect phone for you</h3>
      <p>Find the right phone for your lifestyle, like the revolutionary iPhone 7, the super powerful iPhone 8 or the feature-packed iPhone 8 Plus.</p>
    </div>
  );
}
 
export default HomePage;