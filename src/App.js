import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
    const [people,setPeople] = useState(data)

    const handleClick = () => {
        setPeople([])
    }
    
    return (
    <section className="container">
      <h3> {people.length} birthdays today</h3>

      <List people={people} ></List>

      <button className="btn" onClick={handleClick}>clear All</button>
    </section>
    )
  
}

export default App;
