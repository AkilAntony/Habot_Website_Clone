import logo from './logo.svg';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frame from './Components/Frame';
import VideoBuyer from './Components/Video-buyer/VideoBuyer';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
        <header>
        <Navbar  />
      </header>
      <main>
        <Home  />
        <section className='py-24'>
          <SignUp />
        </section>
        <section>
          <VideoBuyer />
        </section>
        <section className='pt-32 pb-32'>
          <Frame />
        </section>
        <section className='pb-36'>
          <About />
        </section>
      </main>
      <footer className='mt-10'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
