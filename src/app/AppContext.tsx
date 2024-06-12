'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context
interface AppContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a context provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(false);

  return <AppContext.Provider value={{ show, setShow }}>{children}</AppContext.Provider>;
};

// Custom hook to access the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
