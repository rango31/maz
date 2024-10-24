import React, { useEffect, useState } from 'react';
import './App.css';
import Install from "./components/Install"
import Speakers from './components/Speakers';
import Header from './components/Header';
import Sponsors from './components/Sponsors';
import {
  Routes,
  Route,
  useLocation,
  HashRouter,
} from "react-router-dom";
import Program from './components/Program';
import Events from './components/Events';
import Activities from './components/Activities';

let deferredPrompt;  
    
function App() {
  const [installable, setInstallable] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      console.log('INSTALL: Success');
    });
  }, []);

  const handleInstallClick = (e) => {
      // Hide the app provided install promotion
      setInstallable(false);
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
  };

  //const location = useLocation();
  
  return (
    <div className="App">
      <Install installable={installable} handleInstallClick={handleInstallClick}/>

              <HashRouter basename="/">
               <Routes>
                  <Route path="/" element={<Header />} />
                  <Route path="/sponsors" element={<Sponsors />} />
                  <Route path="/speakers" element={<Speakers />} />
                  <Route path="/program" element={<Program />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="*" element={<>not found</>} />
                  </Routes>
              </HashRouter>
              
    </div>
  );
}

export default App;
