
import React, { useState, useEffect } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: {
    city: string;
  };
};

type FilterProps = {
  users: User[];
  setFilteredUsers: (users: User[]) => void;
};

const Filter: React.FC<FilterProps> = ({ users, setFilteredUsers }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [highlightOldest, setHighlightOldest] = useState(false);

  const cities = Array.from(new Set(users.map((user) => user.address.city)));

  useEffect(() => {
    let filtered = users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return (
        fullName.includes(name.toLowerCase()) &&
        (city ? user.address.city === city : true)
      );
    });

    if (highlightOldest && city) {
      
      const usersInCity = filtered.filter((user) => user.address.city === city);
      const oldestUser = usersInCity.reduce((oldest, user) => {
        return new Date(user.birthDate) < new Date(oldest.birthDate)
          ? user
          : oldest;
      }, usersInCity[0]);

   
      filtered = filtered.map((user) => ({
        ...user,
        isOldestInCity: user.id === oldestUser.id, 
      }));
    }
    setFilteredUsers(filtered);
  }, [name, city, users, highlightOldest]);

  return (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-end" }}>
      <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Search name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            backgroundColor: "white",
            color: "black",
            borderColor: "#ccc",
            borderRadius: "4px",
            borderWidth: "1px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
        <label htmlFor="city">City</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            backgroundColor: "white",
            color: "black",
            borderColor: "#ccc",
            borderRadius: "4px",
            borderWidth: "1px",
          }}
        >
          <option value="">Select City ↓</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div> 
      <p>
        {/* Container für "Highlight oldest per city" */}
        <div
          style={{
            display: "flex",
            gap: "5rem",
            alignItems: "flex-end",
            marginTop: "2rem",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ marginRight: "0.6rem", color: "black", fontSize: "1rem" }}>
            Highlight oldest per city
          </span>
          <input
  type="checkbox"
  checked={highlightOldest}
  onChange={(e) => setHighlightOldest(e.target.checked)}
  style={{
    marginRight: "1rem",
    transform: "scale(1.5)", 
    backgroundColor: "#f0f0f0", 
    borderColor: "#ccc", 
    borderRadius: "4px", 
    borderWidth: "1px", 
  }}
/>
        </div>
      </p>
    </div>
  );
};

export default Filter;
