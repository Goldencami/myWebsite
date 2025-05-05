import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx'
import Drawings from './pages/Drawings.jsx';
import TkdApp from './pages/TkdApp.jsx'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/drawings' element={<Drawings />} />
        <Route path='/taekwondo-application' element={<TkdApp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
