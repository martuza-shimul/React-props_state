import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed)
  // };

  const [users, setUsers] = useState([
    {name: "Martuza Shimul", message: "Learned a new thing in JavaScript"},
    {name: "Samiul Islam", message: "I have a new Project ;) "},
    {name: "Nazmul Sumon", message: "I'm very serious with my new Girlfriend"},
    {name: "Abu Sufian", message: "I want to marry a Smart & educated girl"}
  ]);

  return(
    <div className="app">

      {users.map(user => (
        <Tweet name = {user.name} message = {user.message} />
      ))}
    
      {/* <Tweet name="Martuza Shimul" message="Learned a new thing in JavaScript"/>
      <Tweet name="Samiul Islam" message="I have a new Project ;) "/>
      <Tweet name="Nazmul Sumon" message="I'm very serious with my new Girlfriend"/>
      <Tweet name="Abu Sufian" message="I want to marry a Smart & educated girl"/>
      <div>
        <h2 className={isRed ? 'red' : ""}>Change my color</h2>
        <button onClick={increment}>Incremet</button>
        <h1>{count}</h1>
      </div> */}
      
      
      
    </div>
  );
}

export default App;