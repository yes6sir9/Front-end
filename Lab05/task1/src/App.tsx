import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';

const sampleUser: User = {
  name: 'Alice Johnson',
  email: 'alice@example.com',
  age: 28,
};

const sampleSkills: Skill[] = [
  { id: 1, name: 'React', level: 'Expert' },
  { id: 2, name: 'TypeScript', level: 'Intermediate' },
  { id: 3, name: 'CSS', level: 'Expert' },
  { id: 4, name: 'Node.js', level: 'Beginner' },
];

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>User Profile</h1>
      <UserCard user={sampleUser} isActive={true}>
        <section>
          <h3>Bio</h3>
          <p>Frontend developer passionate about React and TypeScript.</p>
        </section>
        <section>
          <h3>Status</h3>
          <p>Available for new projects</p>
        </section>
      </UserCard>
      <h3>Skills</h3>
      <SkillList skills={sampleSkills} />
    </div>
  );
}

export default App;
