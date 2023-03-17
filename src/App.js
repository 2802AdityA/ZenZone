import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Video from './components/Video/Video'
import Form from './components/form/Form'
import Output from './pages/Output';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/find-counsellors" element={<Video />} />
        <Route path="/form" element={<Form />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;
