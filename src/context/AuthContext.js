// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Updated named import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState(null); // To store user details

  useEffect(() => {
    if (authToken) {
      try {
        const decoded = jwtDecode(authToken); // Updated usage
        setUser(decoded);
      } catch (error) {
        console.error('Token Decode Error:', error);
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('authToken');
      }
    } else {
      setUser(null);
    }
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
