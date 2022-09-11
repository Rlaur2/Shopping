import './App.css';
import { MainPage } from './MainPage';
import {Footer} from './components/Footer'
import { Header } from './components/Header';
import { useState } from 'react';


function App() {
  const [change, setChange] = useState(false);
  
  return (
    <div>
      <Header 
        change={change}
        setChange={setChange}
      />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
