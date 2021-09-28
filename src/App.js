import React, { useState } from 'react';
import Data from './Data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data);
  const removeHandler = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <main>
      <section className="container">
        <h2>{people.length} birthday reminder</h2>
        <List people={people} removeHandler={removeHandler} />
        <button onClick={() => setPeople([])}>Clear All</button>
        <button onClick={() => setPeople(Data)}>Refresh All</button>
      </section>
    </main >
  )

}
export default App;