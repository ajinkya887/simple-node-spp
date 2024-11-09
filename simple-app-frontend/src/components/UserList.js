import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(Array.isArray(data) ? data : []);
      console.log(users);
    };
    getUsers();
    
  }, []);

  return (
    <div>
    {Array.isArray(users) && users.length === 0 ? (
      <p>No users found</p>
    ) : (
      <ul>
        {Array.isArray(users) ? (
          users.map((user) => (
            <li key={user._id}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))
        ) : (
          <p>Error loading users</p>
        )}
      </ul>
    )}
  </div>
  );
};

export default UserList;
