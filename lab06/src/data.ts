export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    instructor: "Dr. Jane Smith",
    description:
      "Learn the fundamentals of programming with a focus on problem-solving and algorithmic thinking. Topics include variables, control flow, functions, and basic data structures.",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    instructor: "Prof. John Davis",
    description:
      "Explore essential data structures such as arrays, linked lists, trees, and graphs. Analyze algorithm complexity and apply sorting and searching techniques.",
  },
  {
    id: 3,
    title: "Web Development",
    instructor: "Dr. Maria Garcia",
    description:
      "Build modern web applications using HTML, CSS, and JavaScript. Covers responsive design, DOM manipulation, and introduction to React.",
  },
  {
    id: 4,
    title: "Database Systems",
    instructor: "Prof. Robert Chen",
    description:
      "Study relational database design, SQL, normalization, and transaction management. Hands-on experience with PostgreSQL and query optimization.",
  },
  {
    id: 5,
    title: "Software Engineering",
    instructor: "Dr. Emily Wilson",
    description:
      "Software development lifecycle, design patterns, testing, and project management. Team-based project using agile methodologies.",
  },
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}
