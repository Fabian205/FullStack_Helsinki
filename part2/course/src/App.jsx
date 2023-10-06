/*---------------------------------------------------
 |     2.2: Course information step 7              |
 |     2.3*: Course information step 8              |                        
 ---------------------------------------------------*/

/* const Course = ({ course }) => {
  const parts = course.parts;

  const total = parts.reduce((accumulator, currentExercise) => {
    return accumulator + currentExercise.exercises;
  }, 0);

  return (
    <>
      <h1>{course.name}</h1>
      <div>
        {parts.map((part) => (
          <p key={part.id}>
            {part.name + " "}
            {part.exercises}
          </p>
        ))}
      </div>
      <h4>total of{" "+total+" "}exercises</h4>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
    
  };

  return <Course course={course} />;
};

export default App; */

/*---------------------------------------------------
 |     2.4: Course information step 9 
       2.5: Course information               |                        
 ---------------------------------------------------*/

import Courses from "./Courses";

const App = () => {
  return (
    <div>
      <Courses/>
    </div>
  );
};

export default App;
