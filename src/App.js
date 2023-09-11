import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body1 from './Components/Body1';
import Body2 from './Components/Body2';
import Body3 from './Components/Body3';

function App() {
  return (
    <div>
      <Navbar/>
      <Body1/>
      {/* <div className='grid-container'> */}
      <Body2/>
      <div className='media'>
      <Body3/>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
