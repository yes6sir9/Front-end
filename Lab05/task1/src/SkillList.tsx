import type { Skill, SkillLevel } from './types';

interface SkillListProps {
  skills: Skill[]; // тип массива (Ch. 6, p. 93)
}

const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner':
      return '#6b7280';
    case 'Intermediate':
      return '#3b82f6';
    case 'Expert':
      return '#22c55e';
    default:
      return '#000';
  }
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} -{' '}
          <span
            style={{
              color: getLevelColor(skill.level),
              fontWeight: '600',
            }}
          >
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
