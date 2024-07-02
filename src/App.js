import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frame from './Components/Frame/Frame';
import VideoBuyer from './Components/Video-buyer/VideoBuyer';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <VideoBuyer/>
      <div className='mt-32 mb-32'>
          <Frame/>
      </div> */}
    
        <Home/>
      
      
   
    </div>
  );
}

export default App;
