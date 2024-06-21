'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Define the type for RPGUI
interface RPGUIType {
  init_on_load: boolean;
  init(): void;
  __create_funcs: { [key: string]: (element: HTMLElement) => void };
  __set_funcs: { [key: string]: (elem: HTMLElement, value: number) => void };
  add_class(element: HTMLElement, className: string): void;
  get_child_with_class(element: HTMLElement, className: string): HTMLElement;
  on_load(callback: () => void): void;
  create(element: HTMLElement, type: string): void;
  insert_after(newNode: HTMLElement, referenceNode: HTMLElement): void;
  create_element(tag: string): HTMLElement;
  has_class(element: HTMLElement, className: string): boolean;
  set_value(element: HTMLElement, value: number): void;
}

// Define the context type
interface AppContextType {
  RPGUI?: RPGUIType; // RPGUI is optional
}

const RPGUIContext = createContext<AppContextType | undefined>(undefined);

export const RPGUIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isRPGUILoaded, setIsRPGUILoaded] = useState(false);

  useEffect(() => {
    if (window && window.RPGUI) {
      setIsRPGUILoaded(true);
    }
  }, []);

  // Only provide RPGUIContext when RPGUI is loaded
  const contextValue: AppContextType = {
    RPGUI: isRPGUILoaded ? window.RPGUI : undefined,
  };

  return <RPGUIContext.Provider value={contextValue}>{children}</RPGUIContext.Provider>;
};

export const useRPGUI = (): RPGUIType | undefined => {
  const context = useContext(RPGUIContext);
  if (!context) {
    throw new Error('useRPGUI must be used within a RPGUIProvider');
  }
  return context.RPGUI;
};

export default RPGUIContext;
