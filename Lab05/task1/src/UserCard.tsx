import type { User } from './types';

// Ch. 6, p. 98-100: Проверка типов пропсов
interface UserCardProps {
  user: User;
  isActive?: boolean; // необязательный проп (Ch. 6, p. 99)
  children: React.ReactNode; // любой рендеримый контент
}

const UserCard = ({
  user,
  isActive = true, // значение по умолчанию
  children,
}: UserCardProps) => {
  return (
    <div style={{ opacity: isActive ? 1 : 0.5 }}>
      <h2>{user.name}</h2>
      <p>{user.email} | Age: {user.age}</p>
      {children}
    </div>
  );
};

export default UserCard;
