# Лабораторная 5.1: Типизированные компоненты и валидация пропсов

## Интерфейсы и типы

### `User` (интерфейс)
Описывает структуру данных пользователя:
- `name: string`
- `email: string`
- `age: number`

### `SkillLevel` (псевдоним типа)
Объединённый тип уровня навыка: `'Beginner' | 'Intermediate' | 'Expert'`

### `Skill` (интерфейс)
Описывает структуру данных навыка:
- `id: number`
- `name: string`
- `level: SkillLevel`

### `UserCardProps` (интерфейс)
Пропсы компонента UserCard:
- `user: User` — обязательный
- `isActive?: boolean` — необязательный, по умолчанию `true`
- `children: React.ReactNode` — любой рендеримый контент (строки, JSX и т.д.)

### `SkillListProps` (интерфейс)
Пропсы компонента SkillList:
- `skills: Skill[]` — массив объектов Skill

## Запуск

```bash
npm install
npm run dev
```
