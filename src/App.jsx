import Aboutme from './components/Aboutme';

import Contact from './components/Contact';
import HERO from './components/HERO';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import { CONTACT } from './constants';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-blue-900 bg-neutral-950 min-h-screen relative">
      {/* Background Gradient covering full screen */}
      <div className="absolute inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Navbar */}
      

      {/* Main Content Area */}
      <div className='container mx-auto px-8'>
      <Navbar />
        <HERO />
        
        <Technologies/>
        <Projects/>
       
        <Contact/>
      </div>
    </div>
  );
};

export default App;
