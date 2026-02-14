import type { User } from './types';

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children?: React.ReactNode;
}

const UserCard = ({
  user,
  isActive = true,
  children,
}: UserCardProps) => {
  return (
    <div style={{ opacity: isActive ? 1 : 0.5, marginBottom: '1rem' }}>
      <h3>{user.name}</h3>
      <p>{user.email} | Age: {user.age}</p>
      {children}
    </div>
  );
};

export default UserCard;
