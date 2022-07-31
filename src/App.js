import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Joinus } from './components/Joinus';
import { AboutUs } from './components/AboutUs';
import { Pastors } from './components/Pastors';
import { WelcomeSection } from './components/WelcomeSection';
import { Ministries } from './components/Ministries';
import { Cith } from './components/Cith';
import { Events } from './components/Events';
import { Testmonies } from './components/Testmonies';

function App() {
  return (
    <div>
      <Header />
      <Joinus />
      <AboutUs />
      <Pastors/>  
      <WelcomeSection/>
      <Ministries/>
      <Cith/>
      <Events/>
      <Testmonies/>
    </div>
  );
}

export default App;
