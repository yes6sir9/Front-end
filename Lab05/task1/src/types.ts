// Интерфейс для данных пользователя (Ch. 6, p. 96)
export interface User {
  name: string;
  email: string;
  age: number;
}

// Объединённый тип для уровня навыка (Ch. 6, p. 97)
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Интерфейс для данных навыка
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}
