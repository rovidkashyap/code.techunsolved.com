// import './App.css';
import Home from './components/Home';
import Course from './components/Course';
import DashboardLayout from './layouts/DashboardLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './components/dashboard/TestPage';
import Articles from './components/dashboard/Articles';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course/:initial" element={<Course />} />
          <Route path="/TestPage/:initial" element={<TestPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="Course/:initial" element={<DashboardLayout />} />
              <Route path="Course/:initial/:id" element={<Articles />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
