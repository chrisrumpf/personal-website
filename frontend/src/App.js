import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutme" element={<AboutMePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
