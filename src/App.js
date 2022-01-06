import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Company from './Components/Pages/Company'
import NewProject from './Components/Pages/NewProject'
import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer'
import Projects from './Components/Pages/Projects';

function App() {
  return (
      <Router>
    
        <Navbar />
          <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/newproject" element={<NewProject />}/>
          </Routes>
          </Container>
        <Footer />
    
      </Router>
  );
}

export default App;
