import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frame from './Components/Frame';
import VideoBuyer from './Components/Video-buyer/VideoBuyer';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Home/>
        <div className='py-24'>
             <SignUp/>
        </div>
        <VideoBuyer/>
      <div className='pt-32 pb-32'>
          <Frame/>
      </div>
      
   
    </div>
  );
}

export default App;
