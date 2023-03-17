import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
// import Video from './components/Video/Video'
import Form from './components/form/Form'
import Appointment from './pages/Appointment';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/find-counsellors" element={<Appointment />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
