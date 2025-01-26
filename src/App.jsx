
import React from "react";
import stateImg from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data";
import Header from './components/Header'
import CoreConcept from './components/CoreConcepts'
import TabButton from "./components/TabButton";

function App() {
  const namesArray = ["Luka", "Mate", "Giorgi"];

  return (
    <div>
      <main>
        <Header/>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton> 
          </menu>
        </section>
      </main>    
    </div>
  );
}

export default App;
