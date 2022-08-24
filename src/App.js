import { useState } from 'react';
import Content from './Components/Content';
import Header from './Components/Header'
import Statistics from './Components/Statistics';
import Total from './Components/Total';

const App=()=> {
  const course = {
    name:'Half stack application development',
    parts : [ 
        {
    name:'Fundamentals of React',
   exercise: 10 
   }, 
       {
     name:' Using props to pass data',
     exercise: 7
  },
       {
     name:'State of a component',
   exercise: 14
   }
  ]
 }
 const anecdotes = [
            'If it hurts, do it more often.',
            'Adding manpower to a late software project makes it later!',
            'The first 90 percent of the code accounts for the first 10 percent of the development time... the remaining 10 percent of the code accounts for the other 90 percent of the development time',
            'Any fool can write code that a computer can understand. Good programmers write code that human can understand.',
            'Premature optimization is the root of all evil.',
             'Debugging is twice as hard as writing the code in the first place, therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to start debug it',
            'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use X-rays or blood tests when diagnosing patients.',
 ]
 const [selected, setSelected] = useState(0)

 var size = anecdotes.length;
 const[points, setPoints]= useState(()=>Array(size).fill(0))
 const vote =()=>{
  const copy = [...points]
  console.log(points)
  copy[selected]++;
  return setPoints(copy)
 }
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)
 const total = good + bad + neutral

  return (
    <div className="App">
      <h1><Header course={course.name} /> </h1>
       <div>< Content part1={course.parts[0].name} exercises1={course.parts[0].exercise} part2={course.parts[1].name}  exercises2={course.parts[1].exercise}
        part3={course.parts[2].name}  exercises3={course.parts[2].exercise} /> </div>
      <div><Total total={course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise} /></div>
      <hr />
        <h1>Give feedback</h1>
          <button onClick={()=>setGood(good + 1)}>good</button>
          <button onClick={()=>setNeutral(neutral + 1)}>neutral</button>
          <button onClick={()=>setBad(bad + 1)}>bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />  
        <hr />
        <div>
          <h1>Anecdotes</h1>
          {anecdotes[selected]} <br />
         <h2> has {points[selected]} votes <br /> </h2>
          <button onClick={vote}>Vote</button>
          <button onClick={()=>setSelected(Math.floor(Math.random()* anecdotes.length))} > Next anecdotes</button><br />
         <h2>Most voted Anecdote</h2>
             has {Math.max(...points)}
        </div>
    </div>
  );
}

export default App;
