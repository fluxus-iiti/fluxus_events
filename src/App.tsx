import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';
import CompetitionsPage from './pages/CompetitionsPage/CompetitionsPage';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/events"
        element={<EventsPage />}
      />
      <Route
        path="/competitions"
        element={<CompetitionsPage />}
      />
    </Routes>
  );
}

export default App;
