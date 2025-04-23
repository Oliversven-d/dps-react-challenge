import React, { useEffect, useState } from 'react';
import Filter from './Filter.tsx';
import UserList from './Userlist.tsx';

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Directory</h1>

      <div
        style={{
          border: '2px solid #ccc',
          borderRadius: '12px',
          padding: '2rem',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        }}
      >
        <Filter users={users} setFilteredUsers={setFilteredUsers} />
        <UserList filteredUsers={filteredUsers} />
      </div>
    </div>
  );
};

export default App;
