import React from 'react';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: {
    city: string;
  };
};

type Props = {
  users: User[]; 
  filteredUsers: User[]; 
};

const UserList: React.FC<Props> = ({ users, filteredUsers }) => {
  const isFiltered = (user: User) =>
    filteredUsers.some((u) => u.id === user.id);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontWeight: 'bold',
          borderBottom: '2px solid #ccc',
          paddingBottom: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <div style={{ flex: 1, color: 'black' }}>Name</div>
        <div style={{ flex: 1, color: 'black' }}>City</div>
        <div style={{ flex: 1, color: 'black' }}>Birthday</div>
      </div>

      {users.map((user) => {
        const highlight = isFiltered(user);

        return (
          <div
            key={user.id}
            style={{
              display: 'flex',
              padding: '0.75rem 0', 
              backgroundColor: highlight ? '#d0ebff' : undefined,
              borderBottom: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '0.25rem',
            }}
          >
            <div style={{ flex: 1, paddingRight: '1rem', color: 'black' }}>
              {user.firstName} {user.lastName}
            </div>
            <div style={{ flex: 1, paddingRight: '1rem', color: 'black' }}>
              {user.address.city}
            </div>
            <div style={{ flex: 1, color: 'black' }}>
              {user.birthDate}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
