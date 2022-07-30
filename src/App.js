import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Joinus } from './components/Joinus';
import { AboutUs } from './components/AboutUs';
import { Pastors } from './components/Pastors';
import { WelcomeSection } from './components/WelcomeSection';
import { Ministries } from './components/Ministries';

function App() {
  return (
    <div>
      <Header />
      <Joinus />
      <AboutUs />
      <Pastors/>  
      <WelcomeSection/>
      <Ministries/>
    </div>
  );
}

export default App;
