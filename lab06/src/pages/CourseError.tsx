import { Link } from "react-router-dom";

function CourseError() {
  return (
    <section className="not-found">
      <h1>Course not found</h1>
      <p>The course you are looking for does not exist.</p>
      <Link to="/courses" className="back-link">
        Back to Courses
      </Link>
    </section>
  );
}

export default CourseError;
