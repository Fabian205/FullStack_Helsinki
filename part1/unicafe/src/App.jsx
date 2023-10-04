/*---------------------------------------------------
	 |            INITIAL STATE TO THE APP               |                        
	  ---------------------------------------------------*/
/* import { useState } from 'react'

    const App = () => {
      // save clicks of each button to its own state
      const [good, setGood] = useState(0)
      const [neutral, setNeutral] = useState(0)
      const [bad, setBad] = useState(0)
    
      return (
        <div>
          code here
        </div>
      )
    }
    
    export default App */

/*---------------------------------------------------
 |                  1.6: unicafe step1              |                        
 ---------------------------------------------------*/
/* import { useState } from 'react'

 const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //console.log(good)
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  const Display = ({ good, neutral, bad, text }) => (
    <div>
      {text}
      {good}
      {neutral}
      {bad}      
    </div>
  );

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={()=>setGood(good+1)} text="Good" />
        <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral" />
        <Button handleClick={()=>setBad(bad+1)} text="Bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <Display text={"Good"} good={" " + good} />
        <Display text={"Neutral"} neutral={" " + neutral} />
        <Display text={"Bad"} bad={" " + bad} />
        
      </div>
    </div>
  );
};

export default App; */

/*---------------------------------------------------
 |                  1.7: unicafe step2              |                        
 ---------------------------------------------------*/
/* import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
  };

  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  const Display = ({ good, neutral, bad, all, average, positive, text }) => (
    <div>
      {text}
      {good}
      {neutral}
      {bad}
      {all}
      {average}
      {positive}
    </div>
  );

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => handleButtonClick("good")}>Bueno</button>
      <button onClick={() => handleButtonClick("neutral")}>Neutral</button>
      <button onClick={() => handleButtonClick("bad")}>Malo</button>
      <div>
        <h2>Statistics</h2>
        <Display text={"good:"} good={" " + good} />
        <Display text={"neutral:"} neutral={" " + neutral} />
        <Display text={"bad"} bad={" " + bad} />
        <Display text={"all"} all={" " + all} />
        <Display text={"average"} average={" " + average } />
        <Display text={"positive"} positive={" " + positive + "%"} />
      </div>
    </div>
  );
};

export default App; */

/*---------------------------------------------------
 |                  1.8: unicafe step3              |                        
 ---------------------------------------------------*/
/* import React, { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;
  
  const Statistic = ({ all, average, positive, text }) => (
    <div>
      {text}
      {all}
      {average}
      {positive}
    </div>
  );

  return (
    <div>
      <Statistic text={"all:"} all={" " + all} />
      <Statistic text={"average:"} average={" " + average} />
      <Statistic text={"positive:"} positive={" " + positive} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleButtonClick = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
  };
  
  const Display = ({ good, neutral, bad, text }) => (
    <div>
      {text}
      {good}
      {neutral}
      {bad}
    </div>
  );
 
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => handleButtonClick("good")}>good</button>
      <button onClick={() => handleButtonClick("neutral")}>neutral</button>
      <button onClick={() => handleButtonClick("bad")}>bad</button>
      <h1>Statistics</h1>
      
        <div>        
          <Display text={"good:"} good={" " + good} />
          <Display text={"neutral:"} neutral={" " + neutral} />
          <Display text={"bad:"} bad={" " + bad} />
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    </div>
  );
};

export default App; */


/*---------------------------------------------------
 |                  1.9: unicafe step4              |                        
 ---------------------------------------------------*/
 /* import React, { useState } from "react";

 const Statistics = ({ good, neutral, bad }) => {
   const all = good + neutral + bad;
   const average = (good - bad) / all || 0;
   const positive = (good / all) * 100 || 0;
   
   const Statistic = ({ all, average, positive, text }) => (
     <div>
       {text}
       {all}
       {average}
       {positive}
     </div>
   );
 
   return (
     <div>
       <Statistic text={"all:"} all={" " + all} />
       <Statistic text={"average:"} average={" " + average} />
       <Statistic text={"positive:"} positive={" " + positive} />
     </div>
   );
 };
 
 const App = () => {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);
   const [showStatistics, setShowStatistics] = useState(false);
   const [message, setMessage] = useState("No feedBack given")
 
   const handleButtonClick = (type) => {
     if (type === "good") {
       setGood(good + 1);
     } else if (type === "neutral") {
       setNeutral(neutral + 1);
     } else if (type === "bad") {
       setBad(bad + 1);
     }
     setShowStatistics(true);
     setMessage("");
   };
   
   const Display = ({ good, neutral, bad, text }) => (
     <div>
       {text}
       {good}
       {neutral}
       {bad}
     </div>
   );
  
   return (
     <div>
       <h1>Give feedback</h1>
       <button onClick={() => handleButtonClick("good")}>good</button>
       <button onClick={() => handleButtonClick("neutral")}>neutral</button>
       <button onClick={() => handleButtonClick("bad")}>bad</button>
       <h1>Statistics</h1>
       <p>{message}</p>
 
       {showStatistics && (
         <div>        
           <Display text={"good:"} good={" " + good} />
           <Display text={"neutral:"} neutral={" " + neutral} />
           <Display text={"bad:"} bad={" " + bad} />
           <Statistics good={good} neutral={neutral} bad={bad} />
         </div>
       )}
     </div>
   );
 };
 
 export default App; */


 /*---------------------------------------------------
 |                  1.10: unicafe step5              |                        
 ---------------------------------------------------*/
/*  import React, { useState } from "react";

 const Statistics = ({ good, neutral, bad }) => {
   const all = good + neutral + bad;
   const average = (good - bad) / all || 0;
   const positive = (good / all) * 100 || 0;
   
   const Statistic = ({ all, average, positive, text }) => (
     <div>
       {text}
       {all}
       {average}
       {positive}
     </div>
   );
 
   return (
     <div>
       <Statistic text={"all:"} all={" " + all} />
       <Statistic text={"average:"} average={" " + average} />
       <Statistic text={"positive:"} positive={" " + positive} />
     </div>
   );
 };
 
 const App = () => {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);
   const [showStatistics, setShowStatistics] = useState(false);
   const [message, setMessage] = useState("No feedBack given")
 
   const handleButtonClick = (type) => {
     if (type === "good") {
       setGood(good + 1);
     } else if (type === "neutral") {
       setNeutral(neutral + 1);
     } else if (type === "bad") {
       setBad(bad + 1);
     }
     setShowStatistics(true);
     setMessage("");
   };
   
   const StatisticLine = ({ good, neutral, bad, text }) => (
     <div>
       {text}
       {good}
       {neutral}
       {bad}
     </div>
   );
  
   return (
     <div>
       <h1>Give feedback</h1>
       <button onClick={() => handleButtonClick("good")}>good</button>
       <button onClick={() => handleButtonClick("neutral")}>neutral</button>
       <button onClick={() => handleButtonClick("bad")}>bad</button>
       <h1>Statistics</h1>
       <p>{message}</p>
 
       {showStatistics && (
         <div>        
           <StatisticLine text={"good:"} good={" " + good} />
           <StatisticLine text={"neutral:"} neutral={" " + neutral} />
           <StatisticLine text={"bad:"} bad={" " + bad} />
           <Statistics good={good} neutral={neutral} bad={bad} />
         </div>
       )}
     </div>
   );
 };
 
 export default App; */


 /*---------------------------------------------------
 |                  1.11: unicafe step6              |                        
 ---------------------------------------------------*/
 import React, { useState} from "react";

const Statistics = ({ good, neutral, bad  }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;
  
  const StatisticLine = ({ good, neutral, bad, all, average, positive, text }) => (
    <div>
      {text}
      {good}
      {neutral}
      {bad}
      {all}
      {average}
      {positive}
    </div>
  );

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text={"good:"}/></td>
            <td><StatisticLine good={good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text={"neutral:"} /></td>
            <td><StatisticLine neutral={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text={"bad:"} /></td>
            <td><StatisticLine bad={bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text={"all:"}/></td>
            <td><StatisticLine all={all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text={"average:"}/></td>
            <td><StatisticLine average={average.toFixed(1)} /></td>
          </tr>
          <tr>
            <td><StatisticLine text={"positive:"} /></td>
            <td><StatisticLine positive={positive.toFixed(1) + "%"} /></td>
          </tr>
        </tbody>
      </table>      
    </div>
  );
};

const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [showStatistics, setShowStatistics] = useState(false);
  const [message, setMessage] = useState("No feedBack given");
  

  const handleButtonClick = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
    setShowStatistics(true);
    setMessage("");   
  };
 
  return (
    <div>
      <h1>Give feedBack</h1>
      <button onClick={() => handleButtonClick("good")}>good</button>
      <button onClick={() => handleButtonClick("neutral")}>neutral</button>
      <button onClick={() => handleButtonClick("bad")}>bad</button>
      <h1>Statistics</h1>
      <p>{message}</p>

      {showStatistics && (
        <div>         
           <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      )}
    </div>
  );
};

export default App;