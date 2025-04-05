
import React, { useEffect, useState } from 'react';




function AboutUser() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function userUrl() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      }
      catch (error) {
        setError(error.message);

      }
      finally {
        alert('fetch is executed');
      }
    }
    userUrl();

  }, [])

  if(loading){
    return <span>loading....</span>
  }
  if(error){
    return <span>error</span>
  }

  else {
    return(
      <div>
        <ul>
          {userData.map((user)=>(
            <li key={user.id}> 
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone number:{user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
 
}

export default AboutUser;