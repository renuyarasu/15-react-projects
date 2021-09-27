import React, { useState } from 'react';
import Data from './Data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthday reminder</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main >
  )

}
export default App;