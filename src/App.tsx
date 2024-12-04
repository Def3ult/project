import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import EncryptionMethod from './pages/EncryptionMethod';
import Encrypt from './pages/Encrypt';
import Decrypt from './pages/Decrypt';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('user') !== null;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/welcome"
              element={
                <PrivateRoute>
                  <Welcome />
                </PrivateRoute>
              }
            />
            <Route
              path="/encrypt"
              element={
                <PrivateRoute>
                  <EncryptionMethod />
                </PrivateRoute>
              }
            />
            <Route
              path="/encrypt/:method"
              element={
                <PrivateRoute>
                  <Encrypt />
                </PrivateRoute>
              }
            />
            <Route
              path="/decrypt"
              element={
                <PrivateRoute>
                  <Decrypt />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Layout>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;