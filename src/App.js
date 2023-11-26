import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/home' element={<h1>Homepage</h1>}/> 
       {/* Create register route */}
      </Routes>
    </Router>
  );
}

export default App;
