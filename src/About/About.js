import React, { useEffect, useState } from 'react';


const About = () => {
  const [user, setUser] = useState(0);
  
  const handleUser = () => {
    const newUser = user + 1;
    setUser(newUser);
  }
  useEffect(() => {
    
    console.log(user)
  },[user])

    return (
        <div>
        <h1>This is about</h1>
        <p>{ user}</p>
        <button onClick={handleUser}>submit</button>
      
    </div>
    );
};

export default About;