import reactImg from './assets/react-core-concepts.png'
import React from 'react';

function HeaderComponent() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(){
  
}

function App() {
  return (
    <div>
      asdasdasd
      <HeaderComponent />
      <main>
        <section id='core-concepts'></section>
        <h2>Core Concepts</h2>
      </main>
    </div>
  );
}

export default App;
