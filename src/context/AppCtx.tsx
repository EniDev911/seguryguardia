import React, { createContext, useContext, useEffect, useState } from "react";
import { IApp, Service } from "../interfaces/@types";

const AppContext = createContext<IApp>({} as IApp);


export function useAppContext() {
  return useContext(AppContext) as IApp;
}

type AppCtxProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppProvider: React.FC<AppCtxProviderProps> = ({ children }) => {

  const [services, setServices] = useState<Service[]>([]);

  const getService = (id: string) => {
    const service = services.find((servicio) => servicio.id === id);
    return service;
  };

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <AppContext.Provider
      value={{
        services,
        getService
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
