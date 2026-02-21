import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "../data";

function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  return (
    <section>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
      <p>Route ID parameter: {id}</p>
    </section>
  );
}

export default CourseDetail;
