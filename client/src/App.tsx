import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from './context/AuthContext'; // Import AuthContext
import Register from './pages/Register';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const { token } = useContext(AuthContext)!;
  return token ? element : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<PrivateRoute element={<Tasks />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
