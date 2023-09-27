/*---------------------------------------------------
	 |            INITIAL STATE TO THE APP               |                        
	  ---------------------------------------------------*/

/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App */

/*---------------------------------------------------
	 |                      STEP 1  1.1                  |                        
	  ---------------------------------------------------*/

/* const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const total = exercises1 + exercises2 + exercises3;

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <h1>Content</h1>
        <p>{props.part1} {props.exercises1}</p>
        <p>{props.part2} {props.exercises2}</p>
        <p>{props.part3} {props.exercises3}</p>
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises:{props.total}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />        
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />            
      <Total total={total} />
    </div>
  );
};

export default App; */

/*---------------------------------------------------
	 |                      STEP 2  1.2                  |                        
	  ---------------------------------------------------*/
/* const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Part1 = (props) => {
    return (
      <div>
        <p>
          1. {props.part1} {props.exercises1} exercises
        </p>
      </div>
    );
  };
  const Part2 = (props) => {
    return (
      <div>
        <p>
          2. {props.part2} {props.exercises2} exercises
        </p>
      </div>
    );
  };
  const Part3 = (props) => {
    return (
      <div>
        <p>
          3. {props.part3} {props.exercises3} exercises
        </p>
      </div>
    );
  };
  
  const Content = (props) => {
    return (
      <div>
        <h1>Content</h1>
        <Part1 part1={part1} exercises1={exercises1} />
        <Part2 part2={part2} exercises2={exercises2} />
        <Part3 part3={part3} exercises3={exercises3} />
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises:{props.total}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
  );
};

export default App; */

/*---------------------------------------------------
	 |                      STEP 3   1.3                 |                        
	  ---------------------------------------------------*/
/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

const p1=part1.name;
const p2=part1.exercises;
const p3=part2.name;
const p4=part2.exercises;
const p5=part3.name;
const p6=part3.exercises;

  return (
    <div>
      <h1>{course}</h1>
      <p>1. {p1} {p2} exercises</p>
      <p>2. {p3} {p4} exercises</p>
      <p>3. {p5} {p6} exercises</p>
      <p>Number of exercises:{p2+p4+p6}</p>
    </div>
  )
} 

export default App;*/

/*---------------------------------------------------
	 |                      STEP 4   1.4                 |                        
	  ---------------------------------------------------*/
/* const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };

  const Content = () => {
    return (
      <div>
        <ul>
          {parts.map((part, index) => (
            <li key={index}>
              <p>
                {part.name}&nbsp;&nbsp;{part.exercises}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const Total = () => {
    const exercisesArray = parts.map((part) => part.exercises);
    let sum = 0;

    for (let i = 0; i < exercisesArray.length; i++) {
      sum += exercisesArray[i];
    }
    return (
      <div>
        <ul>
          <p>Number of exercises:&nbsp;{sum}</p>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App; */

/*---------------------------------------------------
	 |                      STEP 5   1.5                 |                        
	  ---------------------------------------------------*/

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const { name, parts } = course;
  
  const Header = () => {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  };
  
  const Content = () => {
    return (
      <div>
        <ul>
          {parts.map((part, index) => (
            <li key={index}>
              <p>
                {part.name}&nbsp;&nbsp;{part.exercises}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const Total = () => {
    const exercisesArray = parts.map((part) => part.exercises);
    let sum = 0;

    for (let i = 0; i < exercisesArray.length; i++) {
      sum += exercisesArray[i];
    }
    return (
      <div>
        <ul>
          <p>Number of exercises:&nbsp;{sum}</p>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Header name={name} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  );
};

export default App;
