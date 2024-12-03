import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MineSummary from './MineSummary';
import App from './DetailSummary/App'; // Ensure this path is correct

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MineSummary />} />
        <Route path="/DetailSummary/App" element={<App />} /> {/* Ensure this path matches your desired route */}
      </Routes>
    </Router>
  );
}

export default MainApp;
