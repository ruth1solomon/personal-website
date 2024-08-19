
import React from 'react';
import Navbar from './components/Navbar';
import Name from './components/Name';
import Page from './components/Page';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900' > 

        <div className='top-0 w-full h-full -z-0 bg-slate-950'>
             
 
      <div className='container px-8 mx-auto '>
        
      <Navbar/>
      <Name/>
      <Page/>
      <Technology/>
      <Experience/>
      <Projects/>
     <Contact/>
      </div>
      </div>
     </div>
    
     
  )
}

export default App