import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Banner from './sections/Banner/Banner';
import Content from './sections/Content/Content';
import Contact from './sections/Contact/Contact';
import About from './sections/About/About';


function App() {
  return (
    <div className="App">
     <Banner/>
     <section>
     <Content/>
<About></About>
     <Contact/>
     </section>
    </div>
  );
}

export default App;
