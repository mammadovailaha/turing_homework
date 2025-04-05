
import React, { useEffect, useState } from 'react';

import './AboutUser.css';



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

  if (loading) {
    return <span>loading....</span>
  }
  if (error) {
    return <span>error</span>
  }

  else {
    return (
      < >

        <div className='container'>
          {userData.map((user) => (
            <div key={user.id} className='userCard'>
             <div className="img"> <img src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" alt="user photo" /></div>
             <div className="info">
             <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone number:{user.phone}</p>
              </div> 
            </div>
          ))}
        </div>
      </>
    );
  }

}

export default AboutUser;