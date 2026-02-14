import { useState } from 'react';
import type { User } from './types';
import UserCard from './UserCard';

// Ch. 6, p. 100: Типизированный useState — TS не выводит User из пустого массива
const INITIAL_DATA: User[] = [
  { name: 'Ayan', email: 'Ayan@mail.com', age: 25 },
  { name: 'Askar', email: 'Askar@mail.com', age: 19 },
  { name: 'Miras', email: 'Miras@mail.com', age: 19 },
  { name: 'Beka', email: 'Beka@mail.com', age: 19 },
  { name: 'loxa', email: 'loxa@mail.com', age: 19 },
];

function SearchApp() {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  // Ch. 6, p. 101: Типизация обработчиков событий — ChangeEvent для изменений input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // Ch. 6, p. 101: MouseEvent для обработчика клика кнопки
  const handleClear = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>User Search</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: '0.5rem 1rem', marginRight: '0.5rem', width: '200px' }}
        />
        <button onClick={handleClear} type="button">
          Clear
        </button>
      </div>
      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div>
          {filteredUsers.map((user) => (
            <UserCard key={user.email} user={user}>
              <small>Match</small>
            </UserCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchApp;
