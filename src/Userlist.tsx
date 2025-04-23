import React from 'react';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: {
    city: string;
  };
  isOldestInCity?: boolean;
  isMatch?: boolean;
};

type Props = {
  filteredUsers: User[]; 
};

const UserList: React.FC<Props> = ({ filteredUsers }) => {
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

      {filteredUsers.map((user) => {
        const isMatch = user.isMatch;
        const isOldest = user.isOldestInCity;

        const rowStyle: React.CSSProperties = {
          display: 'flex',
          padding: '0.75rem 0',
          borderBottom: '1px solid #ddd',
          borderRadius: '4px',
          marginBottom: '0.25rem',
          backgroundColor: isOldest ? '#007bff' : isMatch ? '#d0ebff' : 'transparent', 
          color: isOldest ? 'white' : 'black',  
        
        
        };

        return (
          <div key={user.id} style={rowStyle}>
            <div style={{ flex: 1, paddingRight: '1rem' }}>
              {user.firstName} {user.lastName}
            </div>
            <div style={{ flex: 1, paddingRight: '1rem' }}>
              {user.address.city}
            </div>
            <div style={{ flex: 1 }}>{user.birthDate}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
