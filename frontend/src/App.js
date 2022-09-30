import logo from './logo.svg';
import './App.css';
import UpperSection from './Pages/HomePage/uppersection/UpperSection';
import WomenHelthSection from './Pages/HomePage/womenhealth/WomenHelthSection';
import Succeed from './Pages/HomePage/succeed/Succeed';

function App() {
  return (
    <div className="App">
      <UpperSection/>
      <WomenHelthSection/>
      <Succeed/>
    </div>
  );
}

export default App;
