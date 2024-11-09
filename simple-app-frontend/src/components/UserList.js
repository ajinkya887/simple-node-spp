import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.firstName} {user.lastName} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
