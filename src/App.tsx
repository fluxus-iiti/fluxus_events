import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
    </Routes>
  );
}

export default App;
